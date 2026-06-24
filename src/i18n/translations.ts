import type { Lang } from '../data/types'

// All UI strings live here. Add a key to both languages and use t('key').
export const UI = {
  welcomeTo: { en: 'Welcome to', be: 'Вітаем у' },
  oracle: { en: "neurokitsune's oracle", be: 'аракул neurokitsune' },
  introBefore: {
    en: 'A game of divination, opened only during the summer and winter ',
    be: 'Гульня для варажбы, адкрытая толькі падчас летняга і зімовага ',
  },
  introSolstice: { en: 'solstice', be: 'сонцастаяння' },
  introAfter: {
    en: " - cause it's forbidden to work magic at any other time.",
    be: ' - бо ў іншы час чараваць забаронена.',
  },
  start: { en: 'Start', be: 'Пачаць' },
  madeBy: { en: 'created by neurokitsune and claude', be: 'створана neurokitsune і claude' },
  back: { en: 'Back', be: 'Назад' },

  // Spread selection
  chooseSpread: { en: 'Choose a spread', be: 'Абяры расклад' },
  spreadFate: { en: 'Fate', be: 'Лёс' },
  spreadFateSub: {
    en: 'past · present · future',
    be: 'мінулае · цяперашняе · будучыня',
  },
  spreadQuestion: { en: 'Question', be: 'Пытанне' },
  spreadQuestionSub: { en: 'ask a question', be: 'задаць пытанне' },
  spreadChance: { en: 'Chance', be: 'Выпадковасць' },
  spreadChanceSub: { en: 'a single card', be: 'адна карта' },

  // Reading - positions
  posPast: { en: 'Past', be: 'Мінулае' },
  posPresent: { en: 'Present', be: 'Цяперашняе' },
  posFuture: { en: 'Future', be: 'Будучыня' },
  posCause: { en: 'Cause', be: 'Прычына' },
  posAnswer: { en: 'Answer', be: 'Адказ' },
  posConsequence: { en: 'Consequence', be: 'Наступства' },

  // Reading - interaction
  questionPlaceholder: { en: 'Ask your question…', be: 'Задай сваё пытанне…' },
  divine: { en: 'Read the cards', be: 'Паваражы' },
  tapHint: { en: 'Tap a card to reveal it', be: 'Націсні на карту, каб адкрыць яе' },
  again: { en: 'Again', be: 'Яшчэ раз' },
  englishName: { en: 'English', be: 'Англійскі адпаведнік' },

  // Share
  share: { en: 'Share', be: 'Падзяліцца' },
  sharing: { en: 'Preparing…', be: 'Рыхтуем…' },
  shareSaved: { en: 'Image saved', be: 'Выява захавана' },
  shareError: { en: 'Could not share', be: 'Не атрымалася' },
  shareText: {
    en: 'My card from kitsunebi — neurokitsune’s oracle',
    be: 'Мая карта з kitsunebi — аракула neurokitsune',
  },
  shareTextSpread: {
    en: 'My spread from kitsunebi — neurokitsune’s oracle',
    be: 'Мой расклад з kitsunebi — аракула neurokitsune',
  },
} satisfies Record<string, Record<Lang, string>>

export type UIKey = keyof typeof UI
