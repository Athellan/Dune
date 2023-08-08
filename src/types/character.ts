export interface NewCharacter {
    id?: string
    avatar?: string
    name?: string
    role?: string
    description?: string
    dicton?: string
}

export interface AddCharacter {
    name: string
    avatar: string
    role: string
    dicton: string
    faction: string
    ambition: string
    mainSkill: string
    secondarySkill: string
    selectedTrait: string[]
    selectedSkill: string[]
    talent: string[]
    description: string
    principeDevoir: string
    pointsDevoir: string
    maximeDevoir: string
    principeDomination: string
    pointsDomination: string
    maximeDomination: string
    principeFoi: string
    pointsFoi: string
    maximeFoi: string
    principeJustice: string
    pointsJustice: string
    maximeJustice: string
    principeVerite: string
    pointsVerite: string
    maximeVerite: string
    competenceAnalyse: string
    pointsAnalyse: string
    speAnalyse: string
    competenceCombat: string
    pointsCombat: string
    speCombat: string
    competenceDiscipline: string
    pointsDiscipline: string
    speDiscipline: string
    competenceMobilite: string
    pointsMobilite: string
    speMobilite: string
    competenceRhetorique: string
    pointsRhetorique: string
    speRhetorique: string
    level: number
}