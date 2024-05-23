import { ButtonSizeEnum, ButtonVariantEnum } from '@/components/buttons/enums'

export const DefaultButtonVariantStyles = {
  [ButtonVariantEnum.Primary]: 'bg-primary text-white before:bg-primary/20',
  [ButtonVariantEnum.PrimaryGradient]:
    'bg-primary-gradient text-white hover:bg-secondary-gradient-2 before:bg-purple/80',
  [ButtonVariantEnum.PrimaryOutline]:
    'text-primary border border-primary before:bg-primary/20',
  [ButtonVariantEnum.SecondaryOutline]:
    'text-primary-text border border-line before:bg-line/50 focus-visible:outline-0',
  [ButtonVariantEnum.SecondaryNoline]:
    'text-primary-text hover:border hover:border-line before:bg-line/50',
  [ButtonVariantEnum.White]:
    'bg-white text-primary border border-white hover:border-primary hover:bg-primary hover:text-white before:bg-primary/50',
  [ButtonVariantEnum.WhiteOutline]:
    'text-white border border-white before:bg-white/30',
}

export const DefaultButtonSizeStyles = {
  [ButtonSizeEnum.sm]:
    'px-3 py-[9px] text-xs/3 hover:-translate-y-0.5 before:h-0.5 before:w-[calc(100%-16px)] before:-bottom-0.5 before:left-2',
  [ButtonSizeEnum.md]:
    'px-4 py-3 text-base/4 hover:-translate-y-[3px] before:h-[3px] before:w-[calc(100%-24px)] before:-bottom-[3px] before:left-3',
  [ButtonSizeEnum.lg]:
    'px-5 py-3.5 text-lg/[18px] hover:-translate-y-1 before:h-1 before:w-[calc(100%-24px)] before:-bottom-1 before:left-3',
  [ButtonSizeEnum.xl]:
    'px-9 py-[18px] text-[22px]/[22px] hover:-translate-y-1 before:h-1 before:w-[calc(100%-24px)] before:-bottom-1 before:left-3',
}

export const DefaultButtonDisabledStyles = {
  [ButtonVariantEnum.Primary]: 'opacity-50 cursor-default',
  [ButtonVariantEnum.PrimaryGradient]: '',
  [ButtonVariantEnum.PrimaryOutline]: '',
  [ButtonVariantEnum.SecondaryOutline]: '',
  [ButtonVariantEnum.SecondaryNoline]: '',
  [ButtonVariantEnum.White]: '',
  [ButtonVariantEnum.WhiteOutline]: 'text-white/30 border-white/30',
}
