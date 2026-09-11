import { type LovelaceCardConfig/*, type LovelaceCardEditor */ } from 'custom-card-helpers'
import type { StyleItem } from '../types'

export interface BolderHeaderCardConfig extends LovelaceCardConfig {
  title?: string
  subtitle?: string
  icon?: string
  /** Theme colour name ('red', 'amber', 'primary'…) or any CSS colour value. */
  icon_color?: string
  styles?: StyleItem[]
}

export interface MergedBolderHeaderCardConfig extends LovelaceCardConfig {
  title: string
  subtitle?: string
  icon?: string
  icon_color?: string
  styles?: StyleItem[]
}
