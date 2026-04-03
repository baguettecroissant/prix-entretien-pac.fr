export interface City {
    name: string;
    slug: string;
    zip: string;
    department_name: string;
    department_code: string;
    region: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    population?: number;
    department_info?: DepartmentInfo;
}

export interface DepartmentInfo {
    code: string;
    name: string;
    region: string;
    prix_min: number;
    prix_max: number;
    budget_moyen: number;
    nb_techniciens_rge: number;
    specificite: string;
}

export interface GuideArticle {
    slug: string;
    title: string;
    metaTitle: string;
    metaDescription: string;
    excerpt: string;
    image: string;
    imageAlt: string;
    category: 'guide-pratique' | 'reglementation' | 'prix' | 'technique' | 'conseil-pro';
    publishDate: string;
    updatedDate: string;
    readTime: number;
    tags: string[];
}

export interface BrandInfo {
    slug: string;
    name: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
    image: string;
    imageAlt: string;
    specialite: string;
    gammes: string[];
    avantages: string[];
    entretienSpecifique: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}
