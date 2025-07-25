import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Arpit Tiwari",
    role: "Founder & CEO",
    avatar: "/images/team/arpit.jpeg",
    dataAiHint: "man portrait professional",
    bio: "With over 2+ years in tech, Arpit drives the vision of StackNova, ensuring innovation and excellence in every project.",
    linkedin: "https://linkedin.com/in/tivariarpit01",
  },
  {
    name: "Kalpana Chamoli",
    role: "Frontend Developer",
    avatar: "/images/box5_image.jpg",
    dataAiHint: "man portrait professional",
    bio: "Designs and implements user interfaces with a focus on usability and performance, using modern frameworks and tools.",
    linkedin: "https://www.linkedin.com/in/kalpana-chamoli01/",
  },
  {
    name: "Mukund Kumar Pandey",
    role: "Java Full Stack Developer",
    avatar: "/images/team/mukund.jpg",
    dataAiHint: "woman face professional",
    bio: "Builds scalable web applications from frontend to backend using Java ecosystem, ensuring high performance and reliability.",
    linkedin: "https://www.linkedin.com/in/mukund-kumar-pandey-333140253",
  },
  {
    name: "Shashank Kumar",
    role: "QA Tester",
    avatar: "/images/team/shashank.png",
    dataAiHint: "man face professional",
    bio: "Guarantees product reliability through rigorous test automation, identifying edge cases and ensuring flawless user journeys.",
    linkedin: "https://www.linkedin.com/in/shashank-0955332ba",
  },
  {
    name: "Manish Kumar",
    role: "Sales & Marketing Executive",
    avatar: "/images/team/manish.jpg",
    dataAiHint: "man face professional",
    bio: "Sales and marketing roles drive business growth by connecting products with customers and building brand value.",
    linkedin: "https://www.linkedin.com/in/er-manish-kumar-347688245",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="w-full py-20 md:py-28 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            The Minds Behind the Magic
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed mt-6">
            A passionate team crafting bold technology and creative design
            experiences.
          </p>
        </div>
      </section>

      {/* Mission + Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Empowering businesses with transformative digital solutions. We
                believe in long-term partnerships built on trust, innovation,
                and excellence.
              </p>
              <h2 className="font-headline text-3xl font-bold mb-4">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2020, StackNova started with a small group of tech
                enthusiasts. Now a full-service digital agency, our journey is
                driven by curiosity and craftsmanship.
              </p>
            </div>
            <div className="relative w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/box8_image.jpg"
                alt="Team collaborating"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
              The driving force behind StackNova’s innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="text-center bg-card p-6 hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <CardContent className="flex flex-col items-center">
                  <Avatar className="w-28 h-28 mb-4 border-4 border-primary/50">
                    <AvatarImage
                      src={member.avatar}
                      data-ai-hint={member.dataAiHint}
                    />
                    <AvatarFallback>
                      {member.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex gap-2">
                    {/* {member.twitter && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={member.twitter} target="_blank" aria-label="Twitter">
                          <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </Link>
                      </Button>
                    )} */}
                    {member.linkedin && (
                      <Button variant="ghost" size="icon" asChild>
                        <Link
                          href={member.linkedin}
                          target="_blank"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
