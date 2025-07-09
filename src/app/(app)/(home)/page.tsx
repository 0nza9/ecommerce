import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <main className="p-4">
      <section className="flex flex-col gap-y-4">
        <div>
          <Button variant="elevated" className="border border-black">
            I am a button
          </Button>
        </div>
        <div>
          <Input placeholder="I am an input"  />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea placeholder="I am a textarea"  />
        </div>
        <div className="flex items-center gap-x-2">
          <Checkbox />
        </div>
      </section>
    </main>
  );
}
