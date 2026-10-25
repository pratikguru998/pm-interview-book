::interviewer 00:00
Improve Slack onboarding for new teams.

::candidate 00:05
Clarifying questions:
1. New teams on the free plan, or enterprise rollouts?
2. How do we define activation today?
3. Any data on where teams drop off?

::interviewer
Small teams on the free plan. Activation is up to you. Assume many workspaces have only one active person after week one.

::candidate 00:30
That data point is key: **a team chat tool is worthless with one person**. Slack's value is a network effect within the team. Slack has publicly described a "magic number" where teams that exchanged about 2,000 messages were much more likely to stick.

**Goal:** increase the share of new workspaces that become *active teams* in week one, which leads to retention and paid conversion.

**Activation definition:** a workspace with **3+ members who each send messages in week one**, and at least one channel with real back-and-forth conversation.

Plan: who creates workspaces → journey → leaks → ideas → prioritize → metrics.

::candidate 01:05
**Creator segments:** startup founders, team leads inside companies trying Slack bottom-up, community organizers, freelancers with clients.

Focus: **team leads at small companies** (5–30 people) trying Slack for their team. They're the biggest path to paid plans.

**Journey (Ana, marketing lead, 8-person team):**
1. Signs up, creates a workspace, names channels.
2. Invite step: needs everyone's email addresses → skips "for now".
3. Posts "Hello!" in #general → no one there.
4. Teammates get an invite email days later, it looks like spam, or they ignore it because the team still uses email and WhatsApp.
5. Ana stops opening Slack.

**Leaks:** invites not sent, invites not accepted, accepted but no reason to engage (no activity yet), and old habits (email) win.

::candidate 01:45
**Ideas:**
1. **Invite-first setup:** sign in with Google or Microsoft → suggest colleagues from the same domain or recent contacts → invite in one click during creation.
2. **Shareable invite link + QR** for posting in existing team chats or meetings.
3. **Use-case templates:** "Marketing team" creates channels, a welcome post, a pinned "how we use Slack" message, and a workflow to start (e.g. weekly standup bot). Gives teammates something to respond to.
4. **Bring work in:** connect Google Drive, Calendar, Jira → automatic activity and notifications from day one.
5. **Email bridge:** teammates not yet on Slack get messages by email and can reply by email, which posts to Slack. Lowers the barrier.
6. **Teammate onboarding:** when invitees join, a 60-second tour + "Ana mentioned you in #campaign".

::interviewer
Which one would you do first?

::candidate 02:20
**Invite-first setup + shareable link**, because the biggest leak is the one-person workspace. Nothing else works until there are people in it. Then **templates with a first workflow**, because new members need something to respond to, and a standup bot generates conversation daily.

| Idea | Leak | Impact | Effort |
|---|---|---|---|
| Invite-first + link | Invites not sent | **Very high** | Low–medium |
| Templates + first workflow | Nothing to engage with | High | Medium |
| Integrations at setup | No activity | Medium | Medium |
| Email bridge | Invites not accepted, habits | Medium–high | Medium |

::candidate 02:50
**Metrics:**
- **North Star for this initiative:** % of new workspaces activated in week one (3+ active members).
- Invites sent per workspace during setup, invite acceptance rate, messages in week one, workflows created.
- **Downstream:** 4-week workspace retention, paid conversion within 90 days.
- **Guardrails:** invite spam reports, unsubscribe rate on invite emails.

**Summary:** Slack fails new teams when the creator is alone in the workspace. Making invitations part of setup, giving new teams templates with a first workflow, and bridging email for late adopters gets teams to the critical mass where Slack's network effect kicks in.

::scorecard
- **Team-level activation definition**, appropriate for a network product.
- **Prioritized the biggest leak first**, with clear logic.
- **Metrics connected to retention and paid conversion.**
