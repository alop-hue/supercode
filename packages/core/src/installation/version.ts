declare global {
  const SUPERCODE_VERSION: string
  const SUPERCODE_CHANNEL: string
}

export const InstallationVersion = typeof SUPERCODE_VERSION === "string" ? SUPERCODE_VERSION : "local"
export const InstallationChannel = typeof SUPERCODE_CHANNEL === "string" ? SUPERCODE_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
