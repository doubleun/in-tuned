## In-tuned

### Folder structure

The site is adapting "atomic-design" to structure the folders with a twists to simplify the designs down to 3 categories:

#### Components

- 1. Base:
  - Atomic
  - Molecules
- 2. Compound:
  - Organisms

#### Pages

- 3. NextJS Page:
  - Template
  - Pages

### TODO:

- Add storybook

### Styling

We uses Tailwind CSS with Radix UI following the [shadcn ui](https://ui.shadcn.com) styling. For variant and conditioning we use `clsx` and `cva` for more complex ones.
