import type { Lang } from '../data/types'

// All UI strings live here. Add a key to both languages and use t('key').
export const UI = {
  welcomeTo: { en: 'Welcome to', be: 'Вітаем у' },
  oracle: { en: "neurokitsune's oracle", be: 'аракул neurokitsune' },
  intro: {
    en: 'A game of divination, opened only during the summer and winter solstice — for it is forbidden to work magic at any other time.',
    be: 'Гульня для варажбы, адкрытая толькі падчас летняга і зімовага сонцастаяння — бо ў іншы час чараваць забаронена.',
  },
  start: { en: 'Start', be: 'Пачаць' },
  madeBy: { en: 'made by neurokitsune and claude', be: 'зроблена neurokitsune і claude' },
  chooseStyle: { en: 'Choose a style', be: 'Абярыце стыль' },
  locked: { en: 'Locked', be: 'Зачынена' },
  back: { en: 'Back', be: 'Назад' },

  // Spread selection
  chooseSpread: { en: 'Choose a spread', be: 'Абярыце расклад' },
  spreadFate: { en: 'Fate', be: 'Лёс' },
  spreadFateSub: {
    en: 'past · present · future',
    be: 'мінулае · цяперашняе · будучыня',
  },
  spreadQuestion: { en: 'Question', be: 'Пытанне' },
  spreadQuestionSub: { en: 'ask a question', be: 'задаць пытанне' },
  spreadChance: { en: 'Chance', be: 'Выпадковасць' },
  spreadChanceSub: { en: 'a single card', be: 'адна карта' },

  // Reading — positions
  posPast: { en: 'Past', be: 'Мінулае' },
  posPresent: { en: 'Present', be: 'Цяперашняе' },
  posFuture: { en: 'Future', be: 'Будучыня' },
  posCause: { en: 'Cause', be: 'Прычына' },
  posAnswer: { en: 'Answer', be: 'Адказ' },
  posConsequence: { en: 'Consequence', be: 'Наступства' },

  // Reading — interaction
  questionPlaceholder: { en: 'Ask your question…', be: 'Задайце сваё пытанне…' },
  divine: { en: 'Read the cards', be: 'Паваражы' },
  tapHint: { en: 'Tap a card to reveal it', be: 'Націсніце на карту, каб адкрыць яе' },
  again: { en: 'Again', be: 'Яшчэ раз' },
  englishName: { en: 'English', be: 'Англійскі адпаведнік' },
} satisfies Record<string, Record<Lang, string>>

export type UIKey = keyof typeof UI
