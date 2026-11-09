// Simple in-memory sliding-window rate limiter for the API route

interface RateLimitRecord {
  count: number;
  resetAt: number;
}

const tracker = new Map<string, RateLimitRecord>();

/**
 * Checks if an IP or key has exceeded the allowed number of requests
 * Defaults to 5 requests per 10-minute window.
 */
export function isRateLimited(
  identifier: string,
  limit = 5,
  windowMs = 10 * 60 * 1000
): { limited: boolean; remaining: number } {
  const now = Date.now();
  const record = tracker.get(identifier);

  if (!record || now > record.resetAt) {
    tracker.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });
    return { limited: false, remaining: limit - 1 };
  }

  if (record.count >= limit) {
    return { limited: true, remaining: 0 };
  }

  record.count += 1;
  return { limited: false, remaining: limit - record.count };
}
