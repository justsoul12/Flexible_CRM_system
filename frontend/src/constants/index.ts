import { FAQListParams, Pricing, SidebarLink } from "@/types";


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

export const fAQList:FAQListParams[] = [
  {
    id:1,
    title: 'What is Proactic?',
    detail:`Proactic is a CRM system designed to help businesses manage their customer relationships efficiently. It provides tools for tracking interactions, managing customer data, and analyzing sales performance.`
  },
  {
    id:1,
    title: 'How does Proactic improve customer relationship management?',
    detail:`Proactic improves customer relationship management by centralizing all customer interactions in one place. It offers features such as contact management, sales tracking, and automated follow-ups to ensure that no customer interaction is missed.`
  },
  {
    id:1,
    title: 'Is Proactic suitable for small businesses?',
    detail:`Yes, Proactic is suitable for businesses of all sizes, including small businesses. Its scalable features and customizable options make it a great fit for businesses looking to improve their customer relationship management without significant upfront investment.`
  },
  {
    id:1,
    title: 'Can Proactic integrate with other software?',
    detail:`Yes, Proactic can integrate with various other software applications, such as email platforms, marketing tools, and accounting systems. This allows for seamless data transfer and enhanced functionality.`
  },
  {
    id:1,
    title: 'What kind of customer support does Proactic offer?',
    detail:`Proactic offers comprehensive customer support, including 24/7 helpdesk access, live chat, email support, and an extensive knowledge base with tutorials and guides to help users navigate the system.`
  },
  {
    id:1,
    title: 'How secure is my data with Proactic?',
    detail:`Proactic takes data security seriously and implements robust security measures to protect your data. This includes encryption, regular security audits, and compliance with industry standards to ensure that your customer information remains safe and secure.`
  },

]