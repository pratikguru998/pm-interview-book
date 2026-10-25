::interviewer 00:00
Explain what an API is to someone non-technical, for example your grandmother.

::candidate 00:05
Sure. I'll use an analogy first, then a real example, then say why it matters.

**Analogy: a restaurant.** Imagine you're at a restaurant. You don't walk into the kitchen and cook your food yourself; you don't even need to know how the kitchen works. Instead, you look at the **menu** (the list of things you can ask for), tell the **waiter** what you want, and the waiter brings your dish back.

An **API** is like that waiter and menu, but for software. One app (you) asks another system (the kitchen) for something through a set list of possible requests (the menu), and gets an answer back, without needing to know how the other system works inside.

::interviewer
Can you give a real example?

::candidate 00:40
**Example: a weather app.** When you open a weather app on your phone, the app doesn't have its own weather satellites. It sends a request to a weather service's API, like: *"What's the forecast for London tomorrow?"* The weather service replies: *"18 degrees, cloudy, 20% chance of rain."* The app then shows it nicely on your screen.

Another one you've used: **"Log in with Google"** buttons on websites. The website uses Google's API to ask "Is this person who they say they are?", and Google answers yes or no, without sharing your password with the website.

::interviewer
Why should a business care about APIs?

::candidate 01:00
1. **Speed:** companies don't have to build everything themselves. Uber uses mapping APIs, payment APIs (like Stripe) and messaging APIs (like Twilio for texts) instead of building them from scratch.
2. **Partnerships and ecosystems:** offering your own API lets other companies build on your product (Shopify apps, Slack integrations), which makes your product more valuable and harder to leave.
3. **APIs can be the product itself:** Stripe and Twilio sell APIs to developers. Their "users" are programmers, and the API's ease of use is the product experience.

::coach
For "explain to a non-technical person" questions, avoid jargon entirely in the first explanation (no "endpoints", "JSON", "HTTP"). Then add depth only if asked.

**Summary:** an API is a menu and a waiter between pieces of software: one app asks for something in a defined way and gets an answer, without needing to know how the other system works. It lets products work together, saves companies from rebuilding everything, and can even be a business on its own.

::scorecard
- **Jargon-free analogy** that's accurate.
- **Familiar real examples** (weather, "Log in with Google").
- **Business relevance** for a PM.
