import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { Excalidraw } from "@excalidraw/excalidraw";

export default function () {
  return (
    <div className="space-y-24">

         <div style={{ height: "500px" }}>
        <Excalidraw />
      </div>
      
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="container max-w-4xl px-8 text-center space-y-6">
          <h1 className="text-6xl font-bold tracking-tight text-center">Prodcast Ideas</h1>
        </div>
      </section>

      {/* Notes Section */}
      <section className="container max-w-4xl px-8 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2>Podcast Concept</h2>
          <ul>
            <li>Model this podcast after MFM
              <ul>
                <li>There are business podcasts that go into more depth</li>
                <li>There are comedy podcasts that are funnier</li>
                <li>There is no better funny, business podcast</li>
                <li>We won't win at being the best tech podcast, or the funniest podcast. We might just win at the intersection of the two</li>
              </ul>
            </li>
            <li>Emailed library to book podcast studio at uOttawa</li>
            <li>A good mix of two types of episodes:
              <ul>
                <li><strong>Type 1 episodes:</strong> Two programmers shooting the shit about cool stuff they found that week</li>
                <li><strong>Type 2 episodes:</strong> Interviews with interesting people doing interesting things</li>
              </ul>
            </li>
          </ul>

          <h2>Early Type 1 Episodes</h2>
          <ul>
            <li>A noob's guide to BSD</li>
            <li>A $2,000K/month side hustle if you're a broke student</li>
            <li>Clone overpriced SaaS and make bank</li>
            <li>Learn functional programming and join the top 1% of developers</li>
            <li>The pros and cons of working in open source</li>
          </ul>

          <h2>Early Type 2 Episodes</h2>
          <ul>
            <li>How to get a job at Shopify (w/ Jane and Angela)</li>
            <li>How to start a software agency (Simon Barnes, leverage Gadget connections: Code, Radikal, onelive)</li>
            <li>Farabi's particle accelerator guy</li>
            <li>Steph's marketing tool and/or video game</li>
            <li>Hai showcasing cats with bats</li>
            <li>Rami Alhamad showcasing Alma</li>
            <li>Mo and Harry showcasing Gadget</li>
            <li>Edward Funnekotter or Ali Pourshahid or Ghaith showcasing Solace's new AI offering (reach out to Stephanie Kailia to make the connection)</li>
          </ul>

          <h2>Strategy Notes</h2>
          <p>I say record 5 type 1 episodes before we start inviting guests. That way, we get reps and build the brand a bit (not a hill I'm willing to die on tho)</p>
          <p>Make Gadget kanban board where people can contribute</p>
        </div>
      </section>
    </div>
  );
}
