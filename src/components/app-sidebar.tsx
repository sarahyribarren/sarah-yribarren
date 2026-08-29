import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const topNav = [{ title: "About", url: "/", emoji: "✿" }];

const navGroups = [
  {
    label: "Portfolio",
    items: [
      { title: "Senior Capstone", url: "/capstone", emoji: "⚙️" },
      { title: "Engineering Research", url: "/research", emoji: "🧪" },
      { title: "Physics & Technology", url: "/physics", emoji: "⚛️" },
      { title: "Earth Systems", url: "/earth-systems", emoji: "🌎" },
      { title: "Law, Policy & EJ", url: "/law-policy", emoji: "⚖️" },
    ],
  },
  {
    label: "Bonus",
    items: [
      { title: "Coursework", url: "/coursework", emoji: "📝" },
      { title: "Photo Gallery", url: "/gallery", emoji: "📸" },
    ],
  },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 pt-6 pb-3">
        <Link to="/" className="block">
          <div className="font-display text-2xl leading-none text-foreground whitespace-nowrap">
            Sarah Yribarren
          </div>
          <div className="mt-2 text-[11px] tracking-wide text-muted-foreground">
            ChemE BS · Earth Systems MS
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {topNav.map((item) => {
                const isActive = item.url === "/" ? pathname === "/" : pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.url}>
                    <SidebarMenuButton asChild isActive={isActive} className="font-body">
                      <Link to={item.url} className="flex items-center gap-3">
                        <span className="text-sm w-4 text-center">{item.emoji}</span>
                        <span className="text-[14px]">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive = pathname.startsWith(item.url);
                  return (
                    <SidebarMenuItem key={item.url}>
                      <SidebarMenuButton asChild isActive={isActive} className="font-body">
                        <Link to={item.url} className="flex items-center gap-3">
                          <span className="text-sm w-4 text-center">{item.emoji}</span>
                          <span className="text-[14px]">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-4 pb-5 pt-2">
        <div className="border-t border-border/60 pt-3 text-[11px] leading-relaxed text-muted-foreground">
          <a href="mailto:sarahyribarren@gmail.com" className="block hover:text-foreground transition-colors">
            sarahyribarren@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sarah-yribarren/"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-foreground transition-colors"
          >
            LinkedIn →
          </a>
          <a
            href="https://stanford.digication.com/sarahyribarren-eportfolio/home"
            target="_blank"
            rel="noreferrer"
            className="block hover:text-foreground transition-colors"
          >
            NSC ePortfolio →
          </a>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}