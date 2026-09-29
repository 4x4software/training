# Authentication

Clerk is the only authentication provider for this app. Use the Clerk Next.js SDK for sign-in, sign-up, session state, and access control. Do not add another auth provider or implement a parallel session, token, or password system.

## App Integration

- The root layout provides `ClerkProvider`; `proxy.ts` applies Clerk middleware. Preserve these integration points and follow the current Clerk and Next.js documentation when changing them.
- Keep authorization checks on the server for protected content. Client-side visibility or redirects alone do not protect a route.
- `/dashboard` is a protected route. Require a signed-in user before rendering it, and send signed-out visitors through Clerk sign-in. After successful sign-in, continue to the dashboard.
- A signed-in visitor to `/` must be redirected to `/dashboard`. Signed-out visitors may use the homepage to start sign-in or sign-up.

## Sign-In And Sign-Up UI

- Sign-in and sign-up must always open as Clerk modals, not as standalone full-page forms.
- Use Clerk's modal-capable components and configure any entry routes or redirect behavior to preserve the modal experience.
- Keep post-authentication navigation consistent: successful sign-in from a protected route returns to that route; otherwise send users to `/dashboard`.

Do not treat the requirements above as proof that a route or behavior already exists. Inspect the relevant layout, proxy, and route implementation before changing authentication behavior.