import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight, History } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const portfolioSections = [
  { title: "Senior Capstone", hash: "capstone" },
  { title: "Engineering Research", hash: "research" },
  { title: "Physics & Technology", hash: "physics" },
  { title: "Earth Systems", hash: "earth-systems" },
  { title: "Law, Policy & Environmental Justice", hash: "law-policy" },
];

export function AppSidebar() {
  const pathname = useRouterState({ select: (r) => r.location.pathname });

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-4 pt-6 pb-3">
        <Link to="/" className="block">
          <div className="font-display text-2xl leading-none tracking-[0.02em] text-foreground whitespace-nowrap">
            Sarah Yribarren
          </div>
          <div className="mt-2 text-[11px] tracking-wide text-muted-foreground">
            Stanford · ChemE BS · Earth Systems MS
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"} className="font-body">
                  <Link to="/" className="flex items-center gap-3">
                    <History className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    <span className="text-[14px]">Timeline</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <Collapsible defaultOpen={pathname.startsWith("/portfolio")} className="group/collapsible">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={pathname.startsWith("/portfolio")} className="font-body">
                    <Link to="/portfolio" className="flex items-center gap-3">
                      <span className="text-sm w-4 text-center">📁</span>
                      <span className="text-[14px]">Portfolio</span>
                    </Link>
                  </SidebarMenuButton>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="transition-transform group-data-[state=open]/collapsible:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle portfolio sections</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {portfolioSections.map((section) => (
                        <SidebarMenuSubItem key={section.hash}>
                          <SidebarMenuSubButton asChild className="font-body">
                            <Link to="/portfolio" hash={section.hash}>
                              <span className="text-[13px]">{section.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith("/coursework")} className="font-body">
                  <Link to="/coursework" className="flex items-center gap-3">
                    <span className="text-sm w-4 text-center">📝</span>
                    <span className="text-[14px]">Coursework</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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
