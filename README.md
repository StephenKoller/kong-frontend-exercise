# Kong Konnect Service Catalog
#### Kong Frontend Take-Home Exercise

## Design Considerations

- Built responsive layouts that work well on desktop first, but still look good on other screens
- Used Vue 3's Composition API for cleaner component code
- Used Pinia to manage app state, specifically for pagination but with an eye to future enhancements
- Added client-side pagination to keep things fast and responsive

## Assumptions
- Primary device for use is desktop / laptop computer with a resolution of at least 1280px wide
- Targeted clients are 'modern browsers', so no weird CSS hacks or JS polyfills necessary
- The number of services to manage could be in the 10s to 100s, not 1,000s
- Development role is full-stack with frontend emphasis, allowing for both UI/UX considerations and API integration

## Trade-offs

### Performance vs. Development Speed
- Went with client-side pagination and filtering to ship faster, though we'd probably want server-side for bigger data loads
- Used Vue's built-in reactive systems instead of more complex state management patterns where possible, trading some scalability for simplicity

### Repetition
In some areas, I leaned on repetition over perfectly DRY code in the interest of time. Examples include:
- CSS variables for common values that could be extracted (especially colors for implementing a 'dark mode')
- Some components that could be arguably abstracted further (e.g. BackArrowButton / ForwardArrowButton)
- Duplicate type definitions that could be shared between frontend and backend

## Improvements

### Enhancements Made
- Added fallback for developer avatar images; if image fails to load, the chip uses the first and last initials of the developer instead
- Implemented responsive design considerations beyond the minimum requirements
- Added loading states and error handling for better user experience

### For the Future
Were this to be code heading to production as part of a living codebase, I would prioritize these improvements:

#### Technical Enhancements
- Type-safety: migrating the back-end to [tRPC](https://trpc.io/) to make use of end-to-end type safety, allowing for safer, more rapid iteration for full-stack features
- Comprehensive test coverage including:
  - Unit tests for utility functions
  - Component tests for complex UI elements
  - Integration tests for critical user flows
- Handle search / pagination errors gracefully with fallback UI states
- Server-side pagination and filtering for better scalability

#### User Experience
- Dark mode support using CSS custom properties
- Advanced filtering and sorting capabilities
- Enhanced search with fuzzy matching and filters
- Basic accessibility features like ARIA labels and keyboard navigation

## Functional Requirements

- [Vue 3](https://vuejs.org/) and TypeScript
- User should be able to view the name, a brief description, versions available, and other info shown in the mock for services
- User should be able to search for services ([See search endpoint details below](#searching-the-services-endpoint))
- User should be able to click on a service to view more details
- User should be able to paginate through services (client-side implementation)
- The create Service Package button doesn't have to be operable -- interacting with this elements could do nothing, could be fully implemented (stretch goal), or something in between
- Please update the `README` in the project with a section to describe your design considerations, assumptions, and trade-offs made during this exercise. Also feel free to include any notes about your submission

## Additional Considerations (if applicable)

- The UI should be responsive and look great at different browser viewport sizes
- Pixel-perfect implementation
- Routing and views (e.g. navigating to a given service from its card)
- State management with [Pinia](https://pinia.vuejs.org/)
- [Component Tests and/or Unit Tests](#run-component-and-unit-tests-with-vitest-and-optionally-vue-test-utils)
- Other items covered in your Panel 1 interview

## Evaluation

We will review your code for quality and your ability to talk through it, how you approach the UI, and what tradeoffs you make. Specifically we'll be looking at the following:

- How closely your implementation matches the design along with the other [Functional Requirements](#functional-requirements)
- Code quality, including appropriate componentization and modularity
- TypeScript usage
- Coding (and Vue) best-practices
- The project should pass type checking and build successfully
- How you dedicate the allotted time to focus on your strengths
- Test coverage, if applicable

## How to submit the project

You have up to a week to complete the exercise, but we don't expect you to spend more than a few hours on it.

When it's ready, please send your recruiter a link to the source code in a GitHub repository (no Pull Requests).

---

## Project Setup

### Install dependencies

```sh
pnpm install
```

### Compile and Hot-Reload for Development

Start the backend which serves the `services` API:

```sh
pnpm dev:server
```

In a separate terminal, start the Vue app:

```sh
pnpm dev:ui
```