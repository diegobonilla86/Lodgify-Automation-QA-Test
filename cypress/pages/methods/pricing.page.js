import { PRICING_SELECTORS } from '../selectors/pricing.selectors';

export class PricingPage {
    getScrollBox() { return PRICING_SELECTORS.scrollBox }
    getSliderTickLabelContainer() { return PRICING_SELECTORS.sliderTickLabelContainer }
    getScrollPropPlan() { return PRICING_SELECTORS.scrollPropPlan }
    getStarterPlanCurrency() { return PRICING_SELECTORS.starterPlanCurrency }
    getStarterPlanValue() { return PRICING_SELECTORS.starterPlanValue }
    getProfessionalPlanCurrency() { return PRICING_SELECTORS.professionalPlanCurrency }
    getProfessionalPlanValue() { return PRICING_SELECTORS.professionalPlanValue }
    getUltimatePlanCurrency() { return PRICING_SELECTORS.ultimatePlanCurrency }
    getUltimatePlanValue() { return PRICING_SELECTORS.ultimatePlanValue }
    getStarterPlanCurrencyEuro() { return PRICING_SELECTORS.starterPlanCurrencyEuro }
    getProfessionalPlanCurrencyEuro() { return PRICING_SELECTORS.professionalPlanCurrencyEuro }
    getUltimatePlanCurrencyEuro() { return PRICING_SELECTORS.ultimatePlanCurrencyEuro }
    getCurrencySelect() { return PRICING_SELECTORS.currencySelect }
    getCurrencySelectOptions() { return PRICING_SELECTORS.currencySelectOptions }
    getFirstFAQQuestion() { return PRICING_SELECTORS.firstFAQQuestion }
    getFirstFAQAnswer() { return PRICING_SELECTORS.firstFAQAnswer }
    getFirstFAQGetInTouch() { return PRICING_SELECTORS.firstFAQGetInTouch }
}
