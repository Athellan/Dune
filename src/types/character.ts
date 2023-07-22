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
    faction: string
    ambition: string
    mainSkill: string
    secondarySkill: string
    selectedTrait: string[]
    selectedSkill: string[]
    talent: string[]
    description: string
}