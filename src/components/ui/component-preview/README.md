# Component Preview

A reusable component for previewing UI components with code examples, following shadcn/ui design patterns.

## Features

- **Tabbed Interface**: Switch between preview and code views
- **Copy to Clipboard**: Easy code copying with visual feedback
- **Multiple Backgrounds**: Support for dots, grid, or plain backgrounds
- **Responsive Design**: Mobile-friendly layout
- **TypeScript Support**: Full type safety
- **Customizable**: Flexible props for different use cases

## Usage

```tsx
import { ComponentPreview } from "@/components/ui/component-preview";
import { Button } from "@/components/ui/button";

const buttonCode = `import { Button } from "@/components/ui/button";

export default function Example() {
  return <Button>Click me</Button>;
}`;

export default function MyPage() {
  return (
    <ComponentPreview
      title="Button Example"
      description="A simple button component"
      code={buttonCode}
      background="dots"
    >
      <Button>Click me</Button>
    </ComponentPreview>
  );
}
```

## Props

| Prop          | Type                                      | Default     | Description                                  |
| ------------- | ----------------------------------------- | ----------- | -------------------------------------------- |
| `children`    | `React.ReactNode`                         | -           | The component to preview                     |
| `code`        | `string`                                  | -           | Source code to display                       |
| `language`    | `string`                                  | `"tsx"`     | Programming language for syntax highlighting |
| `className`   | `string`                                  | -           | Additional CSS classes                       |
| `showCopy`    | `boolean`                                 | `true`      | Whether to show the copy button              |
| `title`       | `string`                                  | -           | Component title                              |
| `description` | `string`                                  | -           | Component description                        |
| `showBorder`  | `boolean`                                 | `true`      | Whether to show border around preview        |
| `background`  | `"default" \| "dots" \| "grid" \| "none"` | `"default"` | Background pattern                           |

## Background Options

- **default**: Plain background
- **dots**: Dotted pattern background
- **grid**: Grid pattern background
- **none**: Transparent background

## Examples

### Basic Usage

```tsx
<ComponentPreview code={code}>
  <MyComponent />
</ComponentPreview>
```

### With Custom Background

```tsx
<ComponentPreview
  code={code}
  background="dots"
  title="My Component"
  description="Component description"
>
  <MyComponent />
</ComponentPreview>
```

### Without Copy Button

```tsx
<ComponentPreview code={code} showCopy={false}>
  <MyComponent />
</ComponentPreview>
```

## Styling

The component uses Tailwind CSS and follows shadcn/ui design patterns. It automatically adapts to your theme (light/dark mode).

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- Focus management
- High contrast support
