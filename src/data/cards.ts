import type { Card, Loc, Suit } from './types'

// ─────────────────────────────────────────────────────────────────────────────
//  CARD TEXT - kitsunebi deck (Path of the Nine Tails)
//  Each entry: name (EN classic / BE themed), meaning, and the oracle line `says`.
//  Edit freely. Ids: "major-0".."major-21", "<suit>-1".."<suit>-14"
//  for suit in wands | cups | swords | pentacles (11–14 = Page/Knight/Queen/King).
// ─────────────────────────────────────────────────────────────────────────────

interface CardText {
  name: Loc
  meaning: Loc
  says: Loc
}

const text: Record<string, CardText> = {
  // ── Major Arcana - Path of the Nine Tails ───────────────────────────────
  'major-0': {
    name: { en: 'The Fool', be: 'Лісёнак' },
    meaning: {
      en: 'The beginning of the path - a leap into the unknown with trust and childlike innocence. A wild fox kit steps into the world with nothing, fearless and untaught, led by instinct alone.',
      be: 'Пачатак шляху, скок у невядомае з даверам і дзіцячай наіўнасцю. Дзікі лісяня выходзіць у свет налегке, без страху і без дасведчанасці, ведзены адным чуццём.',
    },
    says: {
      en: 'dare to take the first step, even when the path is not yet in sight.',
      be: 'адважся ступіць першы крок, нават калі сцежкі яшчэ не відаць.',
    },
  },
  'major-1': {
    name: { en: 'The Magician', be: 'Трыкстэр' },
    meaning: {
      en: 'Will, mastery and quickness of mind that turn intention into reality. The trickster fox holds foxfire and every element in his paws at once - all he needs is already with him.',
      be: 'Воля, майстэрства і спрыт розуму, што ператварае задуму ў яву. Ліс-падманшчык трымае ў лапах лісі агонь і ўсе стыхіі адразу - усё, што трэба, ужо пры ім.',
    },
    says: {
      en: 'you have the power to create; act consciously and boldly.',
      be: 'у цябе ёсць сіла стварыць, дзей свядома і смела.',
    },
  },
  'major-2': {
    name: { en: 'The High Priestess', be: 'Схаваная Лісіца' },
    meaning: {
      en: 'Intuition, hidden knowledge, and a silence that says more than words. The fox behind the veil keeps what is never spoken aloud and sees through the dark.',
      be: 'Інтуіцыя, таемнае веданне і маўчанне, у якім чуецца больш, чым у словах. Лісіца за заслонай захоўвае тое, што не кажуць уголас, і бачыць праз морак.',
    },
    says: {
      en: 'listen to your inner voice - the answer is already within you.',
      be: 'прыслухайся да ўнутранага голасу, адказ ужо ў табе.',
    },
  },
  'major-3': {
    name: { en: 'The Empress', be: 'Маці-Лісіца' },
    meaning: {
      en: 'Abundance, care, fertility and living nature. The mother fox gives life and feeds the earth, wreathed in the blossom of midsummer.',
      be: 'Багацце, клопат, урадлівасць і жывая прырода. Маці-лісіца дае жыццё і корміць зямлю, акружаная квеценню купальскага лета.',
    },
    says: {
      en: 'your work is ripening and asks for tenderness, not force.',
      be: 'твая справа спее і просіць пяшчоты, а не прымусу.',
    },
  },
  'major-4': {
    name: { en: 'The Emperor', be: 'Гаспадар Нары' },
    meaning: {
      en: 'Authority, order, structure and clear boundaries. The lord of the den draws the borders and holds the order; the whole structure rests on him.',
      be: 'Улада, парадак, структура і ясныя межы. Гаспадар нары чэрціць рубяжы і трымае ўклад, на ім стаіць увесь лад.',
    },
    says: {
      en: 'take responsibility, build a foundation, and set the rules.',
      be: 'вазьмі адказнасць, пабудуй апору і ўстанаві правілы.',
    },
  },
  'major-5': {
    name: { en: 'The Hierophant', be: 'Захавальнік Святыні' },
    meaning: {
      en: 'Tradition, faith, initiation and teaching passed from hand to hand. The guardian of the shrine keeps the rite and the wisdom of the ancestors, binding the generations.',
      be: 'Традыцыя, вера, пасвячэнне і вучэнне, перададзенае з рук у рукі. Вартаўнік святыні захоўвае абрад і мудрасць продкаў, звязвае пакаленні.',
    },
    says: {
      en: 'seek knowledge in what is proven; join something greater than yourself.',
      be: 'шукай веды ў правераным, далучыся да большага за сябе.',
    },
  },
  'major-6': {
    name: { en: 'The Lovers', be: 'Лісіны Вяселле' },
    meaning: {
      en: 'Union, a choice of values, and love under a sun-shower. The foxes’ wedding draws two paths into one, but demands an honest choice of the heart.',
      be: 'Саюз, выбар каштоўнасцяў і каханне пад сляпым дажджом. Лісіны вяселле зводзіць два шляхі ў адзін, але патрабуе шчырага выбару сэрца.',
    },
    says: {
      en: 'decide what you truly cherish, and join with it for real.',
      be: 'вызначся, што табе дорага, і злучыся з гэтым па-сапраўднаму.',
    },
  },
  'major-7': {
    name: { en: 'The Chariot', be: 'Гон' },
    meaning: {
      en: 'Will, momentum and victory through self-command. The headlong chase races forward, but only a single focused will keeps it on the path.',
      be: 'Воля, рух і перамога праз самавалоданне. Імклівы гон нясе наперад, але толькі адзіная скіраваная воля ўтрымлівае яго на сцежцы.',
    },
    says: {
      en: "gather yourself and steer your own run; don't let it carry you away.",
      be: 'збяры сябе ў кулак і кіруй сваім бегам, не дай яму панесці цябе.',
    },
  },
  'major-8': {
    name: { en: 'Strength', be: 'Утаймаванае Полымя' },
    meaning: {
      en: 'Inner strength, gentleness, and soft mastery. This victory is won not by breaking the beast, but by foxfire tamed with kindness.',
      be: 'Унутраная сіла, лагоднасць і мяккае майстэрства. Не зверам зломленым, а лісім агнём, утаймаваным ласкай, бярэцца гэтая перамога.',
    },
    says: {
      en: 'true strength lies in calm and tenderness, not in brute force.',
      be: 'сапраўдная моц - у спакоі і пяшчоце, а не ў грубым націску.',
    },
  },
  'major-9': {
    name: { en: 'The Hermit', be: 'Затворнік Гары' },
    meaning: {
      en: 'Solitude, searching, wisdom, and a small light in the dark. The hermit on the mountain carries foxfire instead of a lantern and lights his own way.',
      be: 'Адзінота, пошук, мудрасць і агеньчык у цемры. Затворнік на гары нясе лісі агонь замест ліхтара і свеціць сабе сам.',
    },
    says: {
      en: 'step aside, listen to the silence - your answer is found there.',
      be: 'адыдзі ўбок, прыслухайся да цішыні - там знойдзецца твой адказ.',
    },
  },
  'major-10': {
    name: { en: 'The Wheel of Fortune', be: 'Кола Сонцавароту' },
    meaning: {
      en: 'Fate, cycles, and the turning moment. The wheel of the solstice forever turns summer into winter and back - nothing stands still.',
      be: 'Лёс, цыклы і паваротны міг. Кола сонцавароту вечна абарочвае лета ў зіму і назад - нішто не стаіць на месцы.',
    },
    says: {
      en: 'the turn has come; accept the change of current and move with it.',
      be: 'надышоў паварот, прымі змену плыні і рухайся з ёй.',
    },
  },
  'major-11': {
    name: { en: 'Justice', be: 'Шалі' },
    meaning: {
      en: 'Truth, cause and consequence, balance. The scales weigh every deed without mercy and without lies.',
      be: 'Ісціна, прычына і вынік, раўнавага. Шалі ўзважваюць кожны ўчынак без жалю і без хлусні.',
    },
    says: {
      en: 'be honest, for what is sown is what will rise.',
      be: 'будзь сумленны, бо што пасеяна, тое і ўзыдзе.',
    },
  },
  'major-12': {
    name: { en: 'The Hanged Man', be: 'Ліс у Сільцы' },
    meaning: {
      en: 'A pause, sacrifice, a different view, and surrender. The fox caught in the snare goes still - and in that stillness sees the world turned over.',
      be: 'Прыпынак, ахвяра, іншы погляд і здача. Ліс, што трапіў у сільца, замёр - і ў гэтай нерухомасці бачыць свет перавернутым.',
    },
    says: {
      en: 'stop, let go of the struggle, look at everything anew.',
      be: 'спыніся, адпусці барацьбу, паглядзі на ўсё па-новаму.',
    },
  },
  'major-13': {
    name: { en: 'Death', be: 'Лінька' },
    meaning: {
      en: 'An ending, transformation, transition. The molt: the old pelt falls away to make room for the new - this is not death, but renewal.',
      be: 'Канец, пераўтварэнне, пераход. Лінька: старая шкура сыходзіць, каб саступіць месца новай - гэта не смерць, а абнаўленне.',
    },
    says: {
      en: 'release what is spent to make room for what is being born.',
      be: 'адпусці аджытае, каб вызваліць месца таму, што нараджаецца.',
    },
  },
  'major-14': {
    name: { en: 'Temperance', be: 'Зліццё Агнёў' },
    meaning: {
      en: 'Balance, moderation, synthesis and patience. Two fires merge into one steady flame, neither dying down nor bursting out.',
      be: 'Раўнавага, мера, сінтэз і цярпенне. Два агні зліваюцца ў адзін роўны пламень, не гаснучы і не выбухаючы.',
    },
    says: {
      en: 'find the middle; blend opposites into harmony.',
      be: 'знайдзі сярэдзіну, змяшай супрацьлеглае ў гармонію.',
    },
  },
  'major-15': {
    name: { en: 'The Devil', be: 'Апантаны' },
    meaning: {
      en: 'Bonds, addiction, shadow and craving. The possessed one put the chain on himself and holds it out of habit.',
      be: 'Путы, залежнасць, цень і прага. Апантаны сам надзеў на сябе ланцуг і трымае яго за звычку.',
    },
    says: {
      en: 'look at what holds you - and see that the key is in your own paw.',
      be: 'разгледзь, што цябе трымае, - і ўбач, што ключ у тваёй жа лапе.',
    },
  },
  'major-16': {
    name: { en: 'The Tower', be: 'Палаючая Святыня' },
    meaning: {
      en: 'Sudden collapse, revelation, downfall. The burning shrine - a false foundation falls in a single night, baring the truth.',
      be: 'Раптоўны крах, прасвятленне, абвал. Палаючая святыня - фальшывая апора рушыцца за адну ноч, агаляючы праўду.',
    },
    says: {
      en: 'what is built on lies must fall to set you free.',
      be: 'тое, што пабудавана на хлусні, павінна ўпасці, каб вызваліць цябе.',
    },
  },
  'major-17': {
    name: { en: 'The Star', be: 'Жамчужына Душы' },
    meaning: {
      en: 'Hope, inspiration, renewal and quiet light. The pearl of the soul shines after the dark, gentle and pure.',
      be: 'Надзея, натхненне, абнаўленне і ціхае святло. Жамчужына душы свеціць пасля цемры, лагодная і чыстая.',
    },
    says: {
      en: 'after the storm comes calm - trust, and heal.',
      be: 'пасля буры прыходзіць спакой - давярай і лячыся.',
    },
  },
  'major-18': {
    name: { en: 'The Moon', be: 'Месяцовая Сцяжына' },
    meaning: {
      en: 'Illusion, fear, dreams and the unconscious. The moonlit path leads where dark and waking are indistinguishable.',
      be: 'Ілюзія, страх, сны і несвядомае. Месяцовая сцяжына вядзе туды, дзе морак і ява неадрозныя.',
    },
    says: {
      en: "not all is as it seems; tread carefully and don't trust your eyes alone.",
      be: 'не ўсё тое, чым здаецца; ідзі асцярожна і не вер аднаму вачам.',
    },
  },
  'major-19': {
    name: { en: 'The Sun', be: 'Сляпы Дождж' },
    meaning: {
      en: 'Joy, clarity, success, and life itself. The sun-shower - sunlight through rain - is the pure, unclouded joy of being.',
      be: 'Радасць, яснасць, поспех і само жыццё. Сляпы дождж - сонца праз дождж - чыстая, нічым не азмрочаная радасць быцця.',
    },
    says: {
      en: 'a bright time has come; let yourself rejoice openly.',
      be: 'настаў светлы час, дазволь сабе цешыцца адкрыта.',
    },
  },
  'major-20': {
    name: { en: 'Judgement', be: 'Покліч' },
    meaning: {
      en: 'Awakening, reckoning, calling and forgiveness. The summons wakes you and settles accounts with the past, calling you to a new life.',
      be: 'Абуджэнне, вынік, пакліканне і дараванне. Покліч будзіць і зводзіць рахункі з мінулым, клічучы да новага жыцця.',
    },
    says: {
      en: 'hear the call, draw the line, and rise renewed.',
      be: 'пачуй покліч, падвядзі рысу і паўстань абноўлены.',
    },
  },
  'major-21': {
    name: { en: 'The World', be: 'Дзевяціхвосты' },
    meaning: {
      en: 'Completion, wholeness, fullness. The nine-tailed tenko - the path walked to its end, the circle closed.',
      be: 'Завяршэнне, цэласнасць, паўната. Дзевяціхвосты тэнка - шлях пройдзены да канца, кола замкнулася.',
    },
    says: {
      en: 'you have reached fullness; savor the result - and ready yourself for a new turn.',
      be: 'ты дайшоў да поўні, цешся вынікам - і рыхтуйся да новага вітка.',
    },
  },

  // ── Wands · Foxfire (will, energy, action) ──────────────────────────────
  'wands-1': {
    name: { en: 'Ace of Wands', be: 'Туз агню' },
    meaning: {
      en: 'A spark, inspiration, a beginning. Pure foxfire flares in the palm - the first surge of will and intention.',
      be: 'Іскра, натхненне, пачатак. Чысты лісі агонь успыхвае ў далоні - першы парыў волі і задумы.',
    },
    says: {
      en: 'an idea has caught fire; seize it and act while it burns.',
      be: 'загарэлася ідэя, хапай яе і дзей, пакуль гарыць.',
    },
  },
  'wands-2': {
    name: { en: 'Two of Wands', be: 'Двойка агню' },
    meaning: {
      en: 'Choosing a path, planning. The fox stands over two trails, holding the fire - the plan exists; it is time to choose a direction.',
      be: 'Выбар шляху, задума. Лісіца стаіць над дзвюма сцежкамі, трымаючы агонь, - план ёсць, час вырашаць напрамак.',
    },
    says: {
      en: "define your goal and choose a road; don't linger at the crossroads.",
      be: 'акрэслі мэту і выберы дарогу, не стой на ростані.',
    },
  },
  'wands-3': {
    name: { en: 'Three of Wands', be: 'Тройка агню' },
    meaning: {
      en: 'Expansion, awaiting the fruits. The first midsummer fires light up in the distance - the venture has spread wide.',
      be: 'Пашырэнне, чаканне пладоў. Першыя купальскія вогнішчы загараюцца ўдалечыні - задума пайшла ўшыркі.',
    },
    says: {
      en: 'the work is gaining pace; look far and hold your course.',
      be: 'справа набірае ход, глядзі далёка і трымай курс.',
    },
  },
  'wands-4': {
    name: { en: 'Four of Wands', be: 'Чацвёрка агню' },
    meaning: {
      en: 'Celebration, home, joy. The midsummer bonfire and shared dancing under the blossom - a time of happiness and togetherness.',
      be: 'Свята, дом, радасць. Купальскі касцёр і агульныя скокі пад квеценню - час шчасця і еднасці.',
    },
    says: {
      en: "mark what you've achieved; share the joy with those close to you.",
      be: 'адзначы дасягнутае, падзяліся радасцю з блізкімі.',
    },
  },
  'wands-5': {
    name: { en: 'Five of Wands', be: 'Пяцёрка агню' },
    meaning: {
      en: 'Competition, friction. A spirited clash of wills around the fire - more game than war.',
      be: 'Спаборніцтва, трэнні. Задорная сутычка воль вакол агню - больш гульня, чым вайна.',
    },
    says: {
      en: "the clash is unavoidable, but it tempers you; don't fear the friction.",
      be: 'сутыкненне непазбежнае, але яно гартуе; не бойся трэння.',
    },
  },
  'wands-6': {
    name: { en: 'Six of Wands', be: 'Шасцёрка агню' },
    meaning: {
      en: "Victory, recognition. Triumph and the victor's wreath amid a joyful crowd.",
      be: 'Перамога, прызнанне. Трыумф і вянок пераможцы сярод радаснага натоўпу.',
    },
    says: {
      en: 'your work is rewarded; accept the honor with dignity.',
      be: 'твая праца ўзнагароджана, прымі пашану з годнасцю.',
    },
  },
  'wands-7': {
    name: { en: 'Seven of Wands', be: 'Сямёрка агню' },
    meaning: {
      en: 'Standing your ground, defense. The fox holds the high ground against many, yielding nothing.',
      be: 'Адстаяць сваё, абарона. Лісіца трымае вышыню супраць многіх, не саступаючы.',
    },
    says: {
      en: 'defend your place and your convictions; withstand the pressure.',
      be: 'абарані сваё месца і перакананні, вытрымай націск.',
    },
  },
  'wands-8': {
    name: { en: 'Eight of Wands', be: 'Васьмёрка агню' },
    meaning: {
      en: 'Speed, news. Fire-messages streak across the sky like comets - everything is swift.',
      be: 'Хуткасць, весткі. Агні-весткі ляцяць праз неба, як каметы, - усё імкліва.',
    },
    says: {
      en: 'events are accelerating, news is near; act quickly.',
      be: 'падзеі паскараюцца, навіны блізка, дзей хутка.',
    },
  },
  'wands-9': {
    name: { en: 'Nine of Wands', be: 'Дзявятка агню' },
    meaning: {
      en: 'Resilience, the last stand. A weary but unbroken defense at the limit of strength.',
      be: 'Стойкасць, апошні рубеж. Стомленая, але нязломленая абарона на мяжы сіл.',
    },
    says: {
      en: "you've almost made it; hold on just a little longer.",
      be: 'ты амаль дайшоў, патрымайся яшчэ крыху.',
    },
  },
  'wands-10': {
    name: { en: 'Ten of Wands', be: 'Дзясятка агню' },
    meaning: {
      en: 'Burden, overload. A load of ten burning staves bends the back to the ground.',
      be: 'Цяжар, перагрузка. Ноша з дзесяці палаючых дрэўкаў гне спіну да зямлі.',
    },
    says: {
      en: "you've taken on too much - share the load or let part of it go.",
      be: 'ты ўзяў зашмат - падзялі цяжар або частку адпусці.',
    },
  },
  'wands-11': {
    name: { en: 'Page of Wands', be: 'Лісяня агню' },
    meaning: {
      en: 'Eagerness, a bold message. A fox kit with fire is ready to dash off with news, full of zeal.',
      be: 'Імпэт, смелая вестка. Лісяня з агнём гатова імчаць з навіной, поўнае запалу.',
    },
    says: {
      en: 'a new spark of curiosity; be bold and give it a try.',
      be: 'новы агеньчык цікавасці; будзь смелы, паспрабуй.',
    },
  },
  'wands-12': {
    name: { en: 'Knight of Wands', be: 'Вандроўнік агню' },
    meaning: {
      en: 'Impulse, adventure. A headlong dash into the night on a grey wolf, without a backward glance.',
      be: 'Парыў, авантура. Імклівы кідок у ноч на шэрым воўку, без аглядкі.',
    },
    says: {
      en: 'act decisively and passionately, but beware of recklessness.',
      be: 'дзей рашуча і палка, але сцеражыся неабачлівасці.',
    },
  },
  'wands-13': {
    name: { en: 'Queen of Wands', be: 'Лісіца агню' },
    meaning: {
      en: 'Warmth, charisma. The vixen radiates fire from both paws, confident and magnetic.',
      be: 'Цеплыня, харызма. Лісіца выпраменьвае агонь абедзвюма лапамі, упэўненая і прыцягальная.',
    },
    says: {
      en: 'shine as yourself; lead with warmth and confidence.',
      be: 'свяці сабою, вядзі цяплом і ўпэўненасцю.',
    },
  },
  'wands-14': {
    name: { en: 'King of Wands', be: 'Старэйшына агню' },
    meaning: {
      en: 'Mastery of will. The old nine-tail commands the flame with a single gesture, master of his own power.',
      be: 'Улада волі. Стары дзевяціхвосты загадвае полымю адным жэстам, гаспадар сваёй сілы.',
    },
    says: {
      en: 'rule boldly and inspire; your will is your scepter.',
      be: 'кіруй смела і натхняй, твая воля - твой скіпетр.',
    },
  },

  // ── Cups · Mist (feelings, love, intuition) ─────────────────────────────
  'cups-1': {
    name: { en: 'Ace of Cups', be: 'Туз туману' },
    meaning: {
      en: 'New love, an open heart. The cup overflows with the living water of feeling, spilling over the brim.',
      be: 'Новае каханне, адкрытае сэрца. Чара перапаўняецца жывой вадой пачуцця, што льецца праз край.',
    },
    says: {
      en: 'your heart is open - let love and tenderness in.',
      be: 'сэрца адкрыта - упусці каханне і пяшчоту.',
    },
  },
  'cups-2': {
    name: { en: 'Two of Cups', be: 'Двойка туману' },
    meaning: {
      en: 'Union, a confession of love. An exchange of cups over a midsummer wreath on the water - two come together.',
      be: 'Саюз, прызнанне ў каханні. Абмен чарамі над купальскім вянком на вадзе - двое сыходзяцца.',
    },
    says: {
      en: 'mutual feeling is near; the joining of hearts is real.',
      be: 'узаемнасць блізка, злучэнне сэрцаў сапраўднае.',
    },
  },
  'cups-3': {
    name: { en: 'Three of Cups', be: 'Тройка туману' },
    meaning: {
      en: 'Friendship, celebration. Three foxes raise their cups in a round-dance among the flowers.',
      be: 'Сяброўства, свята. Тры лісіцы ўздымаюць чары ў карагодзе сярод кветак.',
    },
    says: {
      en: 'rejoice together with friends; this is a time of togetherness and gratitude.',
      be: 'радуйся разам з сябрамі, гэта час еднасці і ўдзячнасці.',
    },
  },
  'cups-4': {
    name: { en: 'Four of Cups', be: 'Чацвёрка туману' },
    meaning: {
      en: 'Apathy, the missed offering. Gifts set aside and a gaze turned away - the heart is numb with boredom.',
      be: 'Апатыя, упушчанае. Адкінутыя дары і позірк убок - сэрца здранцвела ад нуды.',
    },
    says: {
      en: "you're not noticing what's offered to you; wake up.",
      be: 'ты не заўважаеш таго, што прапануюць; схамяніся.',
    },
  },
  'cups-5': {
    name: { en: 'Five of Cups', be: 'Пяцёрка туману' },
    meaning: {
      en: 'Loss, regret. Spilled into the river, yet two cups still stand behind you.',
      be: 'Страта, шкадаванне. Праліта ў раку, але дзве чары яшчэ стаяць за спінай.',
    },
    says: {
      en: 'the grief is real, but not all is lost - look back.',
      be: 'гора рэальнае, але не ўсё страчана - азірніся.',
    },
  },
  'cups-6': {
    name: { en: 'Six of Cups', be: 'Шасцёрка туману' },
    meaning: {
      en: 'Nostalgia, kindness, childhood. A warm memory and a cup offered by a fox kit beside the old well.',
      be: 'Настальгія, дабрыня, дзяцінства. Цёплая памяць і чара, пададзеная лісянём ля старой студні.',
    },
    says: {
      en: 'return to the good of the past; it heals.',
      be: 'вярніся да добрага мінулага, яно лечыць.',
    },
  },
  'cups-7': {
    name: { en: 'Seven of Cups', be: 'Сямёрка туману' },
    meaning: {
      en: 'Illusions, choice, daydreams. Seven visions rise from the mist, each tempting in its own way.',
      be: 'Ілюзіі, выбар, мроі. Сем відзежаў паўстаюць з туману, кожны вабіць па-свойму.',
    },
    says: {
      en: 'not all dreams are equal - tell the real from the imagined.',
      be: 'не ўсе мары роўныя - адрозні яву ад мроі.',
    },
  },
  'cups-8': {
    name: { en: 'Eight of Cups', be: 'Васьмёрка туману' },
    meaning: {
      en: 'Leaving in search of something deeper. The fox abandons the cups and walks into the mist toward the moon, seeking more.',
      be: 'Адыход за глыбінным. Лісіца пакідае чары і сыходзіць у туман да месяца, шукаючы большага.',
    },
    says: {
      en: "it's time to leave what doesn't fulfill you and move on.",
      be: 'пара пакінуць тое, што не насычае, і пайсці далей.',
    },
  },
  'cups-9': {
    name: { en: 'Nine of Cups', be: 'Дзявятка туману' },
    meaning: {
      en: 'Contentment, the wish fulfilled. A full satisfaction; the wish has come true.',
      be: 'Задаволенасць, спраўджанае жаданне. Сытае задавальненне, жаданне збылося.',
    },
    says: {
      en: "enjoy what you've achieved; you've earned this peace.",
      be: 'цешся дасягнутым, ты заслужыў гэты спакой.',
    },
  },
  'cups-10': {
    name: { en: 'Ten of Cups', be: 'Дзясятка туману' },
    meaning: {
      en: 'Harmony, family joy. A family rejoices under a rainbow over the river.',
      be: 'Гармонія, сямейная радасць. Сям’я радуецца пад вясёлкаю над ракою.',
    },
    says: {
      en: 'the fullness of happiness is in those close to you - cherish this togetherness.',
      be: 'поўня шчасця ў блізкіх - беражы гэтую еднасць.',
    },
  },
  'cups-11': {
    name: { en: 'Page of Cups', be: 'Лісяня туману' },
    meaning: {
      en: 'A tender message, intuition. A fox kit peers into a cup where a little vision-fish swims.',
      be: 'Пяшчотная вестка, інтуіцыя. Лісяня ўглядаецца ў чару, дзе плыве відзеж-рыбка.',
    },
    says: {
      en: 'listen to your heart; good news is coming.',
      be: 'прыслухайся да сэрца, надыходзіць добрая вестка.',
    },
  },
  'cups-12': {
    name: { en: 'Knight of Cups', be: 'Вандроўнік туману' },
    meaning: {
      en: "The romantic, the heart's calling. A dreamer carries a cup like a pledge beside the water, led by love.",
      be: 'Рамантык, покліч сэрца. Летуценнік нясе чару-заклад ля вады, ведзены каханнем.',
    },
    says: {
      en: "follow your feeling, but don't lose yourself in daydreams.",
      be: 'ідзі за пачуццём, але не згубіся ў летуценнях.',
    },
  },
  'cups-13': {
    name: { en: 'Queen of Cups', be: 'Лісіца туману' },
    meaning: {
      en: 'Deep feeling, compassion. The vixen by the water, full of depth and mercy.',
      be: 'Глыбокае пачуццё, спагада. Лісіца ля вады, поўная глыбіні і міласэрнасці.',
    },
    says: {
      en: 'feel and empathize; your sensitivity is your strength.',
      be: 'спачувай і адчувай, твая чуласць - твая сіла.',
    },
  },
  'cups-14': {
    name: { en: 'King of Cups', be: 'Старэйшына туману' },
    meaning: {
      en: 'Mastery over feeling. The elder holds the cup level without spilling - master of his own emotions.',
      be: 'Улада над пачуццём. Стары трымае чару роўна, не разліваючы, - гаспадар сваіх эмоцый.',
    },
    says: {
      en: 'keep calm amid turmoil; govern your feelings wisely.',
      be: 'захоўвай спакой у бурлівым, кіруй пачуццём мудра.',
    },
  },

  // ── Swords · Whisper (mind, conflict, truth) ────────────────────────────
  'swords-1': {
    name: { en: 'Ace of Swords', be: 'Туз шэпту' },
    meaning: {
      en: 'Clarity, breakthrough, truth. The blade of truth rises in foxfire, cleaving the dark.',
      be: 'Яснасць, прарыў, праўда. Клінок ісціны ўзыходзіць у лісім агні, рассякаючы морак.',
    },
    says: {
      en: 'the truth is revealed - think clearly and act decisively.',
      be: 'ісціна адкрылася - мыслі ясна і дзей рашуча.',
    },
  },
  'swords-2': {
    name: { en: 'Two of Swords', be: 'Двойка шэпту' },
    meaning: {
      en: 'Deadlock, a hard choice. Two crossed blades at the chest, eyes under a blindfold.',
      be: 'Тупік, цяжкі выбар. Два скрыжаваныя клінкі ля грудзей, вочы пад павязкаю.',
    },
    says: {
      en: "you're avoiding the decision - take off the blindfold and face the truth.",
      be: 'ты пазбягаеш рашэння - здымі павязку і паглядзі праўдзе ў вочы.',
    },
  },
  'swords-3': {
    name: { en: 'Three of Swords', be: 'Тройка шэпту' },
    meaning: {
      en: 'Pain, heartbreak. Three blades pierce a red wreath - a wound to the heart.',
      be: 'Боль, разрыў. Тры клінкі праколваюць чырвоны вянок - сардэчная рана.',
    },
    says: {
      en: 'the pain is unavoidable; let it pass without running from it.',
      be: 'боль непазбежны, дай яму прайсці, не ўцякаючы.',
    },
  },
  'swords-4': {
    name: { en: 'Four of Swords', be: 'Чацвёрка шэпту' },
    meaning: {
      en: 'Respite, recovery. A quiet calm under a birch, a time to heal wounds.',
      be: 'Перадышка, аднаўленне. Ціхі спакой пад бярозай, час гаіць раны.',
    },
    says: {
      en: 'stop and rest; your strength will return in the stillness.',
      be: 'спыніся і адпачні, сілы вернуцца ў цішыні.',
    },
  },
  'swords-5': {
    name: { en: 'Five of Swords', be: 'Пяцёрка шэпту' },
    meaning: {
      en: 'Discord, a hollow victory. The field is yours, but the bond is broken.',
      be: 'Разлад, пустая перамога. Поле за табой, але сувязь разарваная.',
    },
    says: {
      en: 'consider whether the win is worth its price - sometimes to win is to lose.',
      be: 'падумай, ці вартая перамога цаны - часам выйграць значыць страціць.',
    },
  },
  'swords-6': {
    name: { en: 'Six of Swords', be: 'Шасцёрка шэпту' },
    meaning: {
      en: 'Transition, toward calmer waters. A quiet crossing into the mist, away from the storm.',
      be: 'Пераход, да спакойных водаў. Ціхая пераправа ў туман, прэч ад буры.',
    },
    says: {
      en: 'leave the hard things behind you; calmer waters lie ahead.',
      be: 'пакінь цяжкае ззаду, наперадзе спакайнейшыя воды.',
    },
  },
  'swords-7': {
    name: { en: 'Seven of Swords', be: 'Сямёрка шэпту' },
    meaning: {
      en: 'Cunning, strategy, theft. The fox slips away with the spoils, glancing back.',
      be: 'Хітрасць, стратэгія, крадзеж. Лісіца ўслізгвае з здабычай, азіраючыся.',
    },
    says: {
      en: 'act cleverly and discreetly, but beware self-deception.',
      be: 'дзейнічай разумна і скрытна, але сцеражыся самападману.',
    },
  },
  'swords-8': {
    name: { en: 'Eight of Swords', be: 'Васьмёрка шэпту' },
    meaning: {
      en: 'A trap, a mind bound. A ring of blades and bindings - a captivity that is mostly in the head.',
      be: 'Пастка, скаванасць розуму. Кальцо клінкоў і путы - палон, які больш у галаве.',
    },
    says: {
      en: 'your cage is not as strong as it seems - you can get out.',
      be: 'твая клетка не такая моцная, як здаецца, - ты можаш выйсці.',
    },
  },
  'swords-9': {
    name: { en: 'Nine of Swords', be: 'Дзявятка шэпту' },
    meaning: {
      en: 'Anxiety, nightmares. Night, blades overhead, the weight of thoughts keeping sleep away.',
      be: 'Трывога, кашмары. Ноч, клінкі над галавой, цяжар думак не дае спаць.',
    },
    says: {
      en: 'fears loom larger at night than by day; you are not alone with them.',
      be: 'страхі большыя ўначы, чым удзень; ты не адзін з імі.',
    },
  },
  'swords-10': {
    name: { en: 'Ten of Swords', be: 'Дзясятка шэпту' },
    meaning: {
      en: 'Ruin, and the dawn after. Rock bottom - yet behind you the daybreak is already kindling.',
      be: 'Крах і світанне пасля. Дно падзення, але за спінай ужо займаецца золак.',
    },
    says: {
      en: "it can't get worse - the darkest hour comes before dawn.",
      be: 'горш ужо не будзе - самы цёмны час перад світаннем.',
    },
  },
  'swords-11': {
    name: { en: 'Page of Swords', be: 'Лісяня шэпту' },
    meaning: {
      en: 'Vigilance, a sharp word. A wary fox kit in the wind, braced for trouble.',
      be: 'Пільнасць, вострае слова. Насцярожанае лісяня на ветры, гатовае да бяды.',
    },
    says: {
      en: "be attentive and truthful, but don't cut with words without need.",
      be: 'будзь уважлівы і праўдзівы, але не рэж словам без патрэбы.',
    },
  },
  'swords-12': {
    name: { en: 'Knight of Swords', be: 'Вандроўнік шэпту' },
    meaning: {
      en: 'The drive of ideas, haste. A charge into the storm-wind on a wolf, straight ahead.',
      be: 'Націск ідэй, спешка. Кідок у грозавы вецер на воўку, наўпрост.',
    },
    says: {
      en: "go for your goal decisively, but don't smash everything in your rush.",
      be: 'ідзі да мэты рашуча, але не зламі ўсё на шляху ад спешкі.',
    },
  },
  'swords-13': {
    name: { en: 'Queen of Swords', be: 'Лісіца шэпту' },
    meaning: {
      en: 'Clear judgment, honesty. A sharp gaze, a raven on the shoulder - truth without embellishment.',
      be: 'Ясны суд, сумленнасць. Востры позірк, крумкач на плячы - праўда без прыхарошвання.',
    },
    says: {
      en: 'think soberly and speak plainly, without illusions.',
      be: 'думай цвяроза і гавары прама, без ілюзій.',
    },
  },
  'swords-14': {
    name: { en: 'King of Swords', be: 'Старэйшына шэпту' },
    meaning: {
      en: 'Mastery of mind, law. The elder on the crag commands the wind and judgment, ravens circling above him.',
      be: 'Улада розуму, закон. Стары на скале кіруе ветрам і судом, крумкачы кружаць над ім.',
    },
    says: {
      en: 'lead by reason and principle; be just and firm.',
      be: 'вядзі розумам і прынцыпам, будзь справядлівы і цвёрды.',
    },
  },

  // ── Pentacles · Hearth (plenty, work, home) ─────────────────────────────
  'pentacles-1': {
    name: { en: 'Ace of Pentacles', be: 'Туз ачага' },
    meaning: {
      en: 'New abundance, a gift, an opportunity. A sun-coin glows in the palm amid the rye - a gift of the earth.',
      be: 'Новы дастатак, дар, магчымасць. Сонца-манета свеціцца ў далоні сярод жыта - дар зямлі.',
    },
    says: {
      en: 'a real opportunity is opening; take it and root it.',
      be: 'адкрываецца рэальная магчымасць, вазьмі і ўкарані яе.',
    },
  },
  'pentacles-2': {
    name: { en: 'Two of Pentacles', be: 'Двойка ачага' },
    meaning: {
      en: 'Balance, flexibility. A dance with two coins, keeping balance in motion.',
      be: 'Баланс, гнуткасць. Танец з дзвюма манетамі, утрыманне раўнавагі ў руху.',
    },
    says: {
      en: 'juggle your affairs nimbly; keep the balance between them.',
      be: 'жангліруй справамі гнутка, трымай раўнавагу паміж імі.',
    },
  },
  'pentacles-3': {
    name: { en: 'Three of Pentacles', be: 'Тройка ачага' },
    meaning: {
      en: 'Craft, teamwork, building. Shared work on a home, mastery in the doing.',
      be: 'Рамяство, гурт, будоўля. Агульная праца над хатай, майстэрства ў справе.',
    },
    says: {
      en: 'work alongside others; from the group something strong is born.',
      be: 'працуй разам з іншымі, з гурта народзіцца моцнае.',
    },
  },
  'pentacles-4': {
    name: { en: 'Four of Pentacles', be: 'Чацвёрка ачага' },
    meaning: {
      en: 'Grip, control, miserliness. Coins clutched to the chest - the fear of loss.',
      be: 'Хватка, кантроль, скупасць. Манеты, прыціснутыя да грудзей, - страх страты.',
    },
    says: {
      en: "don't clench too tightly, or you'll choke the flow.",
      be: 'не сціскай занадта моцна, інакш задушыш плынь.',
    },
  },
  'pentacles-5': {
    name: { en: 'Five of Pentacles', be: 'Пяцёрка ачага' },
    meaning: {
      en: 'Want, exclusion. The cold outside a warm window you were not let into.',
      be: 'Нястача, адрынутасць. Холад звонку цёплага акна, з якога цябе не пусцілі.',
    },
    says: {
      en: 'a hard time, but help is closer than it seems - ask for it.',
      be: 'цяжкі час, але дапамога бліжэй, чым здаецца - папрасі.',
    },
  },
  'pentacles-6': {
    name: { en: 'Six of Pentacles', be: 'Шасцёрка ачага' },
    meaning: {
      en: 'Generosity, giving and receiving. Grain and coins pour into outstretched palms.',
      be: 'Шчодрасць, даваць і браць. Зерне і манеты сыплюцца ў працягнутыя далоні.',
    },
    says: {
      en: 'share what you have; the flow of good will return to you.',
      be: 'дзяліся тым, што маеш, плынь дабра вернецца.',
    },
  },
  'pentacles-7': {
    name: { en: 'Seven of Pentacles', be: 'Сямёрка ачага' },
    meaning: {
      en: 'Patience, slow growth. A long wait for the harvest over a ripening field.',
      be: 'Цярпенне, павольны рост. Доўгае чаканне ўраджаю над спелым полем.',
    },
    says: {
      en: "what's sown doesn't ripen at once - wait, and don't dig up the root.",
      be: 'пасеянае спее не адразу - пачакай і не выкопвай корань.',
    },
  },
  'pentacles-8': {
    name: { en: 'Eight of Pentacles', be: 'Васьмёрка ачага' },
    meaning: {
      en: 'Diligence, craftsmanship. Work at the bench, coin after coin.',
      be: 'Стараннасць, майстэрства ў працы. Праца за варштатам, манета за манетай.',
    },
    says: {
      en: 'perfect your craft; mastery is forged through repetition.',
      be: 'удасканальвайся ў сваёй справе, майстэрства куецца паўторам.',
    },
  },
  'pentacles-9': {
    name: { en: 'Nine of Pentacles', be: 'Дзявятка ачага' },
    meaning: {
      en: 'Abundance, self-sufficiency. The richness of the garden and the calm of contentment, earned by your own work.',
      be: 'Дастатак, самадастатковасць. Багацце саду і спакой задаволенасці, здабытыя сваёй працай.',
    },
    says: {
      en: 'enjoy the fruit of your efforts; you are your own support.',
      be: 'цешся плёнам сваіх высілкаў, ты сама сабе апора.',
    },
  },
  'pentacles-10': {
    name: { en: 'Ten of Pentacles', be: 'Дзясятка ачага' },
    meaning: {
      en: 'Wealth, legacy, home. Three generations beside a strong house under an oak.',
      be: 'Багацце, спадчына, дом. Тры пакаленні ля моцнай хаты пад дубам.',
    },
    says: {
      en: 'durability and a family legacy are laid down for the long haul.',
      be: 'трываласць і сямейная спадчына закладзены надоўга.',
    },
  },
  'pentacles-11': {
    name: { en: 'Page of Pentacles', be: 'Лісяня ачага' },
    meaning: {
      en: 'Study, a practical beginning. A fox kit curiously examines a coin in the field.',
      be: 'Вучоба, практычны пачатак. Лісяня з цікаўнасцю вывучае манету ў полі.',
    },
    says: {
      en: 'begin learning a new craft - a small, practical step.',
      be: 'пачні вучыцца новаму рамяству, маленькі практычны крок.',
    },
  },
  'pentacles-12': {
    name: { en: 'Knight of Pentacles', be: 'Вандроўнік ачага' },
    meaning: {
      en: 'Persistence, reliability. A steady, dependable pace across the fields, without hurry.',
      be: 'Упартасць, надзейнасць. Мерны, надзейны ход цераз палі, без спешкі.',
    },
    says: {
      en: 'go slowly but without stopping - steadiness wins.',
      be: 'ідзі павольна, але няспынна - сталасць перамагае.',
    },
  },
  'pentacles-13': {
    name: { en: 'Queen of Pentacles', be: 'Лісіца ачага' },
    meaning: {
      en: 'Care, comfort, practicality. The vixen in the garden of plenty, a warm and attentive keeper of the home.',
      be: 'Клопат, утульнасць, практычнасць. Лісіца ў садзе багацця, цёплая і дбайная гаспадыня.',
    },
    says: {
      en: 'tend to your own and your home; earthly care is your gift.',
      be: 'дбай пра сваіх і свой дом, зямная клапатлівасць - твой дар.',
    },
  },
  'pentacles-14': {
    name: { en: 'King of Pentacles', be: 'Старэйшына ачага' },
    meaning: {
      en: 'The provider, lasting prosperity. The elder beside a bountiful house and harvest, calm and secure.',
      be: 'Здабытчык, трывалы дастатак. Стары ля шчодрай хаты і ўраджаю, спакойны і забяспечаны.',
    },
    says: {
      en: "you've built a solid foundation; manage it wisely and generously.",
      be: 'ты збудаваў трывалую апору, кіруй ёю разважліва і шчодра.',
    },
  },
}

const SUIT_NAME: Record<Suit, Loc> = {
  major: { en: 'Major Arcana', be: 'Старшыя арканы' },
  wands: { en: 'Wands', be: 'Лісі агонь' },
  cups: { en: 'Cups', be: 'Туман' },
  swords: { en: 'Swords', be: 'Шэпт' },
  pentacles: { en: 'Pentacles', be: 'Ачаг' },
}

const TBD: Loc = { en: '-', be: '-' }

function makeCard(suit: Suit, number: number): Card {
  const id = `${suit}-${number}`
  const t = text[id]
  return {
    id,
    arcana: suit === 'major' ? 'major' : 'minor',
    suit,
    number,
    name: t?.name ?? TBD,
    meaning: t?.meaning ?? TBD,
    says: t?.says ?? TBD,
    image: `cards/${suit}/${number}.webp`,
  }
}

function buildDeck(): Card[] {
  const cards: Card[] = []
  for (let n = 0; n <= 21; n++) cards.push(makeCard('major', n))
  for (const suit of ['wands', 'cups', 'swords', 'pentacles'] as const) {
    for (let n = 1; n <= 14; n++) cards.push(makeCard(suit, n))
  }
  return cards
}

export const DECK: Card[] = buildDeck()

export const suitName = SUIT_NAME
