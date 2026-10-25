::interviewer 00:00
Estimate how much new video storage YouTube needs per day.

::candidate 00:05
Let me clarify scope:
1. Only newly uploaded videos, not existing ones?
2. Do you want the raw upload size, or the storage after YouTube processes videos into multiple resolutions?
3. Should I include redundancy (replicas)?

::interviewer
New uploads per day. Include processing and redundancy; that's the interesting part.

::candidate 00:25
Great. I'll structure it as a formula first, then plug in numbers.

**Daily storage = hours uploaded per day × GB per hour (base quality) × encoding multiplier × replication factor**

::coach
Writing the formula before the numbers is the single most important habit in estimation. It shows structure and lets the interviewer challenge one input at a time.

::candidate 00:40
**1. Hours uploaded per day.** A commonly cited figure is about **500 hours of video uploaded every minute**. I'll use that.
500 × 60 × 24 = 500 × 1,440 = **720,000 hours per day**.

If I didn't know that figure, I'd estimate bottom-up: say ~2.5B users, 0.1% upload on a given day (2.5M uploaders) × 15 minutes average → 625k hours/day. Same ballpark. Good.

**2. GB per hour at a base quality.** 1080p video compressed with a modern codec runs at about 3–5 Mbps.
4 Mbps × 3,600 s = 14,400 Mb = 1,800 MB ≈ **1.8 GB/hour**. I'll round to **~1.5–2 GB**, use **1.5 GB** (many uploads are lower resolution).

**3. Encoding multiplier.** YouTube stores each video in many resolutions (144p, 240p, 360p, 480p, 720p, 1080p, sometimes 1440p/4K) and multiple codecs. Lower resolutions are much smaller; 4K is much bigger. Total across versions might be roughly **2–3× the 1080p size**. I'll use **2.5×**.

**4. Replication factor.** For durability and availability across data centres, assume **3 copies** (a common default; real systems may use erasure coding, which is more efficient).

::candidate 01:50
**Calculation:**
- 720,000 h × 1.5 GB = **1,080,000 GB ≈ 1.08 PB** (base)
- × 2.5 encodings = **2.7 PB**
- × 3 replicas = **8.1 PB per day**

**≈ 8 petabytes of new storage per day**, or roughly **3 exabytes per year**.

::interviewer
Does that seem reasonable?

::candidate 02:15
**Sanity check:** 3 EB/year is enormous but plausible for a company of Google's scale (it operates many huge data centres). A single large hard drive today holds ~20 TB, so 8 PB/day ≈ 400 drives/day before efficiency gains. That's a lot but not crazy for a hyperscaler.

**Sensitivity:** the result is most sensitive to:
1. **Encoding multiplier** (share of 4K content could push it up),
2. **Replication strategy** (erasure coding might use ~1.5× instead of 3×, cutting the total by half),
3. **Upload volume** growth.

**Product/engineering implications:** storage cost drives decisions like deleting unused high-resolution versions of rarely watched videos, using more efficient codecs (AV1), and tiered storage (cold storage for old videos).

**Summary:** 720k hours/day × 1.5 GB × 2.5 encodings × 3 replicas ≈ 8 PB per day.

::scorecard
- **Formula first**, then inputs.
- **Cross-checked an input** with a bottom-up estimate.
- **Showed working** for unit conversions (Mbps → GB/hour).
- **Sanity check, sensitivity and implications.**
