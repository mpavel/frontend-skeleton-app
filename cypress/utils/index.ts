import { Given, Then, When } from '@badeball/cypress-cucumber-preprocessor';

export {
  Given,
  When,
  Then,
}

export const formatParam = (attribute: string): string => attribute.split(/\s/)
  .join('-')
  .toLowerCase();