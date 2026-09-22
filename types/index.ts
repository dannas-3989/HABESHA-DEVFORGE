// src/types/index.ts
// Habesha DevForge — Unified Type Definitions
// Covers: Developer Profiles, Team Matching (DevMatch), Boilerplates (StarkForge),
// and the Mock API Hub (Agelgil API Hub).

// ============================================================================
// SHARED / UTILITY TYPES
// ============================================================================

export type ISODateString = string;

export type UUID = string;

/** Generic envelope used for all REST responses across the backend. */
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
  timestamp: ISODateString;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

/** Generic paginated response wrapper. */
export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

// ============================================================================
// DEVELOPER PROFILE (DevMatch core)
// ============================================================================

export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export type DeveloperRole =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "designer"
  | "product-manager"
  | "data-scientist"
  | "devops"
  | "qa";

export type AvailabilityStatus =
  | "open-to-team"
  | "in-team"
  | "not-looking"
  | "away";

export interface Skill {
  name: string;
  level: SkillLevel;
  yearsOfExperience?: number;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
  telegram?: string;
  twitter?: string;
}

export interface DeveloperProfile {
  id: UUID;
  userId: UUID;
  displayName: string;
  avatarUrl?: string;
  headline: string; // e.g. "Full-stack dev | Chapa integrations | Amharic UX"
  bio?: string;
  location?: EthiopianLocation;
  role: DeveloperRole;
  secondaryRoles?: DeveloperRole[];
  skills: Skill[];
  interests: string[]; // e.g. ["fintech", "agritech", "e-commerce"]
  availability: AvailabilityStatus;
  socials?: SocialLinks;
  starkProfileUrl?: string; // link to Stark.et profile
  createdAt: ISODateString;
  updatedAt: ISODateString;

  // Card presentation metadata (drives the 3D-tilt dev-card.tsx)
  cardTheme?: DevCardTheme;
}

export interface EthiopianLocation {
  city: string; // e.g. "Addis Ababa"
  subCity?: string; // e.g. "Bole"
  woreda?: string; // e.g. "Woreda 03"
}

export type DevCardAccent = "electric-blue" | "vibrant-purple" | "emerald-green";

export interface DevCardTheme {
  accent: DevCardAccent;
  glowIntensity?: "subtle" | "medium" | "high";
}

// ============================================================================
// TEAM & MATCHING STATE (DevMatch)
// ============================================================================

export type TeamStatus =
  | "forming"      // team created, still recruiting
  | "locked"       // team is full / recruiting closed
  | "active"       // hackathon build in progress
  | "submitted"    // final submission made
  | "disbanded";

export type MatchRequestStatus =
  | "pending"
  | "accepted"
  | "declined"
  | "withdrawn"
  | "expired";

export interface Team {
  id: UUID;
  name: string;
  tagline?: string;
  description?: string;
  status: TeamStatus;
  ownerId: UUID; // developerProfile.id of the team creator
  memberIds: UUID[]; // developerProfile.id[]
  maxMembers: number;
  rolesNeeded: DeveloperRole[];
  projectIdea?: string;
  boilerplateIds?: UUID[]; // attached StarkForge boilerplates
  apiHubKeyId?: UUID; // provisioned Agelgil API Hub key, once formed
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

/** A request from a developer to join a team, or a team's invite to a developer. */
export interface MatchRequest {
  id: UUID;
  teamId: UUID;
  fromProfileId: UUID; // requester (or inviter, depending on direction)
  toProfileId?: UUID; // set when a team invites a specific developer
  direction: "join-request" | "invite";
  status: MatchRequestStatus;
  message?: string;
  createdAt: ISODateString;
  respondedAt?: ISODateString;
}

/** A single entry in the live "LFG" (Looking For Group) activity feed. */
export interface LfgFeedEvent {
  id: UUID;
  type:
    | "profile-joined"
    | "team-created"
    | "match-request-sent"
    | "match-accepted"
    | "team-locked"
    | "boilerplate-attached"
    | "api-key-provisioned";
  actorProfileId?: UUID;
  actorDisplayName?: string;
  teamId?: UUID;
  teamName?: string;
  message: string; // pre-formatted human-readable string for the ticker
  createdAt: ISODateString;
}

// ============================================================================
// SOCKET.IO EVENT CONTRACTS (shared between frontend + backend)
// ============================================================================

/** Events the client listens for (server -> client). */
export interface ServerToClientEvents {
  "lfg:new-event": (event: LfgFeedEvent) => void;
  "match:request-received": (request: MatchRequest) => void;
  "match:status-updated": (request: MatchRequest) => void;
  "team:updated": (team: Team) => void;
  "presence:update": (payload: PresenceUpdate) => void;
  "connection:ack": (payload: { socketId: string }) => void;
}

/** Events the client emits (client -> server). */
export interface ClientToServerEvents {
  "match:send-request": (payload: {
    teamId: UUID;
    fromProfileId: UUID;
    message?: string;
  }) => void;
  "match:respond": (payload: {
    requestId: UUID;
    status: Extract<MatchRequestStatus, "accepted" | "declined">;
  }) => void;
  "presence:heartbeat": (payload: { profileId: UUID }) => void;
  "team:subscribe": (payload: { teamId: UUID }) => void;
}

export interface PresenceUpdate {
  profileId: UUID;
  status: AvailabilityStatus;
  lastSeen: ISODateString;
}

// ============================================================================
// STARTER KIT ENGINE (StarkForge boilerplates)
// ============================================================================

export type BoilerplateCategory =
  | "frontend-scaffold"
  | "payment-integration"
  | "webhook-template"
  | "ui-kit"
  | "auth"
  | "database-schema";

export interface Boilerplate {
  id: UUID;
  name: string; // e.g. "Next.js + Chapa Payment Middleware"
  description: string;
  category: BoilerplateCategory;
  tags: string[]; // e.g. ["chapa", "payments", "nextjs"]
  repoUrl?: string;
  cloneCommand: string; // one-click clone/setup command shown in UI
  compatiblePaymentProviders?: LocalPaymentProvider[];
  amharicOptimized?: boolean;
  createdAt: ISODateString;
}

export type LocalPaymentProvider = "chapa" | "telebirr" | "cbe-birr" | "hellocash";

/** Tracks which boilerplates a team has attached and their setup state. */
export interface TeamBoilerplateAttachment {
  id: UUID;
  teamId: UUID;
  boilerplateId: UUID;
  attachedByProfileId: UUID;
  setupStatus: "attached" | "cloning" | "ready" | "failed";
  attachedAt: ISODateString;
}

// ============================================================================
// DEVELOPMENT UTILITY GATEWAY (Agelgil API Hub)
// ============================================================================

export type MockDatasetType =
  | "subcities-woredas"
  | "phone-numbers"
  | "bank-transactions"
  | "chapa-webhook-payloads"
  | "telebirr-webhook-payloads"
  | "currency-exchange-tickers"
  | "amharic-names";

/** The provisioned API key/kit issued to a team once formed. */
export interface ApiHubKey {
  id: UUID;
  teamId: UUID;
  key: string; // mock key string, e.g. "agl_live_..."
  label: string; // e.g. "Habesha DevForge Hackathon Dev Kit"
  enabledDatasets: MockDatasetType[];
  rateLimitPerMinute: number;
  provisionedAt: ISODateString;
  expiresAt?: ISODateString;
  revoked: boolean;
}

/** Generic wrapper for a mock dataset record served by /mockHub routes. */
export interface MockDatasetRecord<T = unknown> {
  datasetType: MockDatasetType;
  generatedAt: ISODateString;
  records: T[];
}

// --- Concrete mock data shapes -------------------------------------------

export interface SubCityWoreda {
  city: "Addis Ababa";
  subCity: string;
  woredas: string[];
}

export interface MockEthiopianPhoneNumber {
  number: string; // e.g. "+251912345678"
  carrier: "ethio-telecom" | "safaricom-et";
  isValid: boolean;
}

export interface MockBankTransaction {
  transactionId: string;
  bank: "CBE" | "Awash" | "Dashen" | "Abyssinia" | "Wegagen";
  amountEtb: number;
  senderName: string;
  receiverName: string;
  status: "pending" | "completed" | "failed";
  timestamp: ISODateString;
}

export interface ChapaWebhookPayload {
  event: "charge.success" | "charge.failed";
  tx_ref: string;
  amount: string;
  currency: "ETB";
  status: string;
  customer: {
    email: string;
    phone_number: string;
    name: string;
  };
}

export interface TelebirrWebhookPayload {
  outTradeNo: string;
  transactionId: string;
  totalAmount: string;
  tradeStatus: "SUCCESS" | "FAIL" | "PENDING";
  msisdn: string; // subscriber phone number
  timestamp: number; // unix epoch
}

export interface CurrencyExchangeTicker {
  currencyPair: "USD/ETB" | "EUR/ETB" | "GBP/ETB";
  buyRate: number;
  sellRate: number;
  source: "NBE" | "CBE" | "mock-market";
  updatedAt: ISODateString;
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isTeamStatus(value: string): value is TeamStatus {
  return ["forming", "locked", "active", "submitted", "disbanded"].includes(
    value
  );
}

export function isMockDatasetType(value: string): value is MockDatasetType {
  return [
    "subcities-woredas",
    "phone-numbers",
    "bank-transactions",
    "chapa-webhook-payloads",
    "telebirr-webhook-payloads",
    "currency-exchange-tickers",
    "amharic-names",
  ].includes(value);
}