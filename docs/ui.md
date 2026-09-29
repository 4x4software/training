# UI Components

Use shadcn/ui components for every user-interface element in this app. Do not create custom UI components or hand-build controls with styled HTML in place of shadcn components.

## Component Usage

- Check `components/ui/` first and reuse the existing component that fits the need. Import UI components through the configured `@/components/ui` alias.
- If a needed component is missing, add the corresponding shadcn/ui component using the shadcn CLI, then use it. Do not implement a custom substitute.
- Compose screens from the available shadcn/ui components and use their supported variants and props. Keep styling consistent with the project's shadcn configuration and shared theme.
- Use the configured Lucide icon library for icons within shadcn components.

Before changing a screen, inspect nearby UI and the component implementation so new usage follows the project's installed shadcn setup.