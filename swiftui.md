# Dog Breed Explorer – Senior SwiftUI Take-Home Challenge (4 Hours)

## Objective

Use the [https://dog.ceo/dog-api](https://dog.ceo/dog-api) and build a simple yet well-structured SwiftUI app that lists dog breeds and lets users view details and favorite them. Focus on **code quality, architecture, and SwiftUI best practices**. 

---

## Core Features (Must-Have)

### 1. Breed List Screen
- Fetch the list of dog breeds.
- Display breed names in a **lazy-loaded scrollable List or Grid**.
- Each item should show the **breed name** and a **placeholder image**.
- Tapping a breed navigates to a detail screen.

### 2. Breed Detail Screen
- Fetch and display a **random image** for the selected breed.
- Tapping in the image will load **another random image**.
- The user must have a way to add/remove the breed from favorites.
- Add a **basic transition or animation** when the image appears or changes.

### 3. Favorites Screen
- Show a separate screen listing favorited breeds.
- Show one image per favorite.
- Tapping an item navigates to the breed's detail view.

---

## Technical Requirements

- Use **SwiftUI** with a clean, scalable architecture. 
- Structure code into logical modules/components.
- Use **async/await** or Combine appropriately.
- **Persist favorites** using a clean approach.
- Include **error handling** (e.g., graceful UI if the API call fails).
- Add a "No favorites yet" message when the list is empty.
- Follow best practices for **memory management** and **reusability**.
- Explain the chosen architecture for state and persistence in the README.

---

## What We Expect

- Screen recording of the whole development process.
- Thoughtful component and state design.
- Clear separation of concerns.
- Idiomatic SwiftUI usage.
- Good use of SwiftUI features.
- Concise and maintainable code.

---

## Minimal Testing

Write **at least one unit test**:
- Test the logic for adding/removing favorites.

Write **one SwiftUI Preview** for a reusable view or screen.

---

## Bonus (Optional, Only if Time Permits)

These are **not required**, but they help us evaluate advanced skills:

- Custom navigation animation or image transition.
- Offline support or in-memory cache for API responses.
- Accessibility support (Dynamic Type, VoiceOver labels).
- Multi-window support (macOS or iPadOS).

---

## What to Submit

- A link to the screen recording hosted in Google Drive or similar service.
- A link to your GitHub repository (or ZIP file) containing:
  - Full source code
  - README with:
    - Architecture explanation
    - Setup instructions
    - Any assumptions or trade-offs
- Mention any **bonus** features implemented

---

## Time Limit

This test is designed to take **no more than 4 hours**. If you run out of time, note what you would have done next in the README.