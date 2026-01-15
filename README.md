# Mini Heaven SMP — Site (minihesven-site)

This repository is a starter scaffold for your Mini Heaven SMP website. It includes:
- user registration/login (demo JWT cookie),
- admin promotion for `nood2proinbloxfruit@gmail.com`,
- site coins (wallet), manual top-up proof flow,
- store (buy ranks with coins),
- protected resource-pack download endpoint (admin-only).

Important notes:
- Deploy to Vercel (recommended) so serverless API routes work (admin-only download requires server runtime).
- Replace the demo auth + file storage with a real DB and use hashed passwords before real production use.
- Add `JWT_SECRET` to Vercel environment variables.

Initial setup (quick)
1. Create a repo on GitHub named `minihesven-site`.
2. Add these files and commit to `main`.
3. Deploy on Vercel (import GitHub repo). Set environment variable:
   - JWT_SECRET = (a long random string)
4. After deploy, register with `nood2proinbloxfruit@gmail.com` to get admin role.
5. To add your private resource pack (admin-only), place your ZIP at `private/miniheaven_resourcepack.zip` in the repo before deploying.
