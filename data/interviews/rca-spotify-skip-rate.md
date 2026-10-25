::interviewer 00:00
The skip rate on Spotify's Discover Weekly playlist jumped 15% this week. Investigate.

::candidate 00:05
Clarifying questions:
1. How is skip rate defined: skips within 30 seconds ÷ tracks started?
2. Is the jump sudden (this week's playlist) or gradual?
3. All users or a subset?

::interviewer
Skips within 30 seconds. Sudden, with this Monday's playlist. Scope unknown.

::candidate 00:20
Discover Weekly is generated weekly, so a sudden jump with one week's playlist suggests something changed in **how this week's playlists were generated** or **who received them**.

Plan: validate → recent changes → segment → hypotheses → confirm → fix.

**1. Validate:** any change to skip tracking (app release changing how skips are logged, e.g. counting "next" in the car)? Are related metrics moving: saves from Discover Weekly, minutes listened, playlist completion?

::interviewer
Saves from Discover Weekly are down too. No tracking changes.

::candidate 00:45
So users genuinely like this week's recommendations less.

**2. Recent changes:**
- **Model update** to the recommendation algorithm (new version, retraining).
- **Experiments** live on Discover Weekly.
- **Data pipeline issues:** stale or missing input data (e.g. last week's listening history not ingested, so recommendations are based on old data).
- **Catalogue changes:** licensing removed songs, or new rules (e.g. promoting new releases).
- **User mix:** a wave of new users (sparse history) after a marketing campaign.

**3. Segment:** new vs tenured users, region, platform, model version (if A/B), genre.

::interviewer
The jump is across all user types and regions. A new model version was deployed Sunday.

::candidate 01:15
Strong suspect: the **new model version deployed Sunday**, right before Monday's playlists.

**Confirm:**
- Was it rolled out to everyone or a share? If there's a control group still on the old model, compare skip rates directly.
- Check offline evaluation results for the new model: did it pass? Were the offline metrics representative (e.g. it optimized for novelty, recommending more unfamiliar artists)?
- Inspect samples of playlists: are they less personalized, less diverse, or dominated by certain artists or genres?
- Check the model's input features: any pipeline break feeding it stale data?

::interviewer
The new model was rolled out to 100% without an A/B test because offline metrics looked good.

::candidate 01:40
Then the process gap is part of the root cause: offline metrics didn't capture what users experience.

**Action:**
- **Roll back** to the previous model for next week's generation (or regenerate this week's playlists if feasible).
- **Investigate** why offline metrics diverged: e.g. the evaluation rewarded novelty or accuracy on historical data, but users found the picks less relevant.
- **Process fix:** require online A/B tests (with skip rate, saves, listening time as metrics) for model changes to flagship surfaces, with a staged rollout and automatic alerts on skip rate.

**Summary:** The jump came from a new recommendation model rolled out to everyone without an online test. Saves fell too, confirming worse recommendations. Roll back, investigate the offline/online mismatch, and require staged A/B rollouts for model changes.

::scorecard
- **Used the product's mechanics** (weekly generation) to focus the search.
- **Validated with related metrics** (saves).
- **Found both the cause and the process gap** (offline-only evaluation).
