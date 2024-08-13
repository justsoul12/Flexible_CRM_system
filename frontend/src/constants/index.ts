import { Pricing, SidebarLink } from "@/types";


export const SidebarLinks: SidebarLink[] = [
    {
        label:"Product",
        route:"#product"
    },
    {
        label:"Solutions",
        route:"#solutions"
    },
    {
        label:"Demo",
        route:"#demo"
    },
    {
        label:"Pricing",
        route:"#pricing"
    },
    {
        label:"Resources",
        route:"#resources"
    },
]
export const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

export const pricing:Pricing[] = [
  {
    id:1,
    title: 'Hobby',
    amountInMonth: '$0 / Month',
    amountInYear: '$0 / Year',
    description: 'For individuals trying out the product',
    features: [
      'Access to all tools for 14 days',
      'No credit card required',
      'Community Support'
    ]
  },
  {
    id:2,
    title: 'Pro',
    amountInMonth: '$50 / Month',
    amountInYear: '$250 / Year',
    description: 'For small to large businesses',
    features: [
      'Everything in Hobby +',
      'Access to our dev team',
      'Coffee with the CEO',
      'Request tools',
      'Advanced analytics',
      'Customizable dashboards',
      '24/7 customer support',
      'Unlimited data storage',
      'Enhanced security features',
    ]
  },
  {
    id:3,
    title: 'Enterprise',
    amountInMonth: 'Custom',
    amountInYear: 'Custom',
    description: 'For large scale businesses +',
    features: [
      'Everything in Pro +',
      'HIPAA and SOC2 compliance',
      'Bulk email support',
      'Customizable dashboards',
      '24/7 customer support',
    ]
  },
]