import components from "@/components";
import { ShowcaseComponent } from "@/components/showcase-component";

export default function Home() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8'>
      <header className='flex flex-col gap-1'>
        <h1 className='text-3xl font-bold tracking-tight'>Custom Registry</h1>
        <p className='text-muted-foreground'>
          A custom registry using shadcn components.
        </p>
      </header>
      <main className='flex flex-col flex-1 gap-8'>
        {components.map((component) => (
          <ShowcaseComponent
            key={component.name}
            title={component.title}
            name={component.name}
            codeBlock={component.codeBlock}
          >
            {component.component()}
          </ShowcaseComponent>
        ))}
      </main>
    </div>
  );
}
