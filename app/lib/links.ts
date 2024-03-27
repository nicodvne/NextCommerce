export interface Link {
    name: string;
    href: string;
}

const links: Link[] = [
    { name: "Home", href: '/' },
    { name: "Protège-Tibias", href: '/ShinGuards' },
    { name: "Gants MMA", href: '/Gloves' },
    { name: "Protège-dents", href: '/TeathProtecter' },
];

export default links;
