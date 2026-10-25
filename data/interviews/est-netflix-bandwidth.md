::interviewer 00:00
Estimate Netflix's peak streaming bandwidth in the US.

::candidate 00:05
Clarifying questions:
1. Peak concurrent bandwidth (e.g. Tbps at 9pm on a Sunday)?
2. US only?

::interviewer
Yes, peak concurrent bandwidth in the US.

::candidate 00:10
**Formula:** peak bandwidth = concurrent streams at peak × average bitrate per stream.

Concurrent streams = US subscriber accounts × % streaming at peak × streams per streaming account.

::candidate 00:25
**1. US subscriber accounts:** Netflix has ~**80M** paid memberships in the US/Canada region; I'll use ~75M for the US.

**2. % of accounts streaming at the peak hour:** evenings (8–10pm) are peak. Not every household watches every evening. Maybe **25–30%** of accounts are streaming at the peak moment. Use **27%** → ~20M accounts.

**3. Streams per streaming account:** sometimes two people watch different things on one account (family plans). Average ~**1.1** → **~22M concurrent streams**.

**4. Average bitrate:**
- SD: ~1 Mbps; HD (1080p): ~3–5 Mbps; 4K: ~15 Mbps.
- Mix: many TVs stream HD; some 4K; mobile uses less. Average ~**5 Mbps**.

**Calculation:** 22M × 5 Mbps = 110M Mbps = **110 Tbps** (terabits per second).

::interviewer
How does Netflix deliver that much traffic?

::candidate 01:15
Through its own **content delivery network, Open Connect**: Netflix places cache servers directly inside internet service providers' networks and at internet exchange points. Popular titles are preloaded overnight (during off-peak hours), so at peak most traffic is served locally within the ISP, instead of crossing the internet from central data centres. That reduces cost and improves quality. Plus efficient codecs (e.g. AV1, per-title encoding) reduce bitrate for the same quality.

**Sensitivity:** % streaming at peak and the 4K share drive the result most. Range: **~70–150 Tbps**.

**Summary:** ~75M accounts × ~27% streaming at peak × 1.1 streams × ~5 Mbps ≈ **~110 Tbps**, delivered mostly via Netflix's own caches inside ISPs.

::scorecard
- **Clear concurrency logic.**
- **Bitrate mix reasoning.**
- **Technical follow-up** answered with CDN knowledge.
