::interviewer 00:00
When would you choose a SQL database versus a NoSQL database?

::candidate 00:05
I'll explain what each is, compare them on the key trade-offs, and give concrete product examples.

**SQL (relational) databases**, e.g. PostgreSQL, MySQL:
- Data in **tables with a fixed structure** (schema): rows and columns, like spreadsheets with strict rules.
- **Relationships** between tables (an order belongs to a customer) and powerful queries with **joins**.
- **ACID transactions:** a group of changes either all happen or none do. Example: moving money from A to B never leaves money "in the middle".

**NoSQL databases**, several types:
- **Key-value** (Redis, DynamoDB): fast lookups by a key.
- **Document** (MongoDB): flexible JSON-like documents.
- **Wide-column** (Cassandra): massive write volumes across many machines.
- **Graph** (Neo4j): relationships (social networks).
Typically: **flexible schemas**, designed to **scale horizontally** across many servers, often trading strict consistency for availability and speed (eventual consistency).

::candidate 00:55
| Criterion | SQL | NoSQL |
|---|---|---|
| Data structure | Structured, consistent | Flexible, varied |
| Relationships / complex queries | ✅ Strong (joins) | ❌ Limited (depends on type) |
| Transactions / consistency | ✅ Strong | Often eventual (some support transactions) |
| Horizontal scaling to huge volume | Harder (possible with effort) | ✅ Designed for it |
| Schema changes | Migrations needed | Easy |

**Examples:**
- **Payments, orders, inventory, bookings** → SQL. Correctness matters; you can't double-sell the last hotel room.
- **User activity feeds, logs, IoT sensor data, chat messages at scale** → NoSQL (wide-column/key-value). Huge write volumes, simple access patterns.
- **Product catalogue with very different attributes** (a T-shirt vs a laptop) → document database.
- **Session data, caching** → key-value (Redis).
- **"Friends of friends" recommendations** → graph database.

::interviewer
As a PM, why does this matter to you?

::candidate 01:40
Because the choice affects **product behaviour and timelines**:
- With eventual consistency, a user might not see their own post immediately, or like counts may be briefly off. That's fine for a feed but unacceptable for a bank balance, so I need to know which experiences require strong consistency.
- Adding new fields or features is easier with flexible schemas; changing a relational schema on a huge table can take engineering time.
- Scaling needs (e.g. 10× traffic next year) affect cost and architecture decisions.

In practice most companies use **both**: SQL for core transactional data and NoSQL for high-volume or flexible data. My job is to clarify the product requirements (consistency, query needs, scale) so engineering can choose well.

**Summary:** choose SQL when you need structured data, relationships and strong transactional correctness (payments, orders); choose NoSQL when you need flexible schemas or massive horizontal scale with simple access patterns (feeds, logs, sessions). Many products use both.

::scorecard
- **Clear definitions** including NoSQL types.
- **Comparison table and concrete use cases.**
- **PM relevance:** consistency's effect on user experience.
