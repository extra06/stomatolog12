const serviceData = [
  {
    title: "Терапия",
    tag: "Лечение и восстановление",
    lead: "Консультации, лечение корневых каналов, реставрации и пломбирование.",
    items: [
      ["Временная пломба \"Висцин\", \"Унифас\"", "500 руб."],
      ["Восстановление зуба, режущего края световым материалом производства USA, Германия", "3 700 руб."],
      ["Восстановление зуба при разрушенности более 1/2 световым материалом", "5 000 руб."],
      ["Художественная реставрация зуба световым материалом Япония, Италия, USA", "8 000 руб."],
      ["Осмотр врача-стоматолога, консультация, составление плана лечения", "500 руб."],
      ["Шлифовка, полировка пломбы", "300 руб."],
      ["Обработка полости", "350 руб."],
      ["Наложение лечебной прокладки Calcimol, Лайф, Дайкал, Vitremer, Фуджи", "600 руб."],
      ["Наложение изолирующей прокладки Ионосит, Фуджи", "650 руб."],
      ["Временная пломба Septomak, Md-Temp", "400 руб."],
      ["Коагуляция десны лазером с медобработкой", "800 руб."],
      ["Перфорация штампованной коронки с целью лечения зуба", "500 руб."],
      ["Перфорация металлокерамической, цельнолитой коронки с целью лечения зуба", "850 руб."],
      ["Распломбировка 1 к/к, запломбированного пастой на основе окиси цинка, гуттаперчей", "800 руб."],
      ["Раскрытие зуба при пародонтите", "800 руб."],
      ["Компьютерная рентген-диагностика", "550 руб."],
      ["Распломбировка 1 к/к, запломбированного пастой на основе резорцинформалина", "1 000 руб."],
      ["Извлечение инородного тела из корневого канала, простое", "1 000 руб."],
      ["Извлечение инородного тела из корневого канала, сложное", "1 500 руб."],
      ["Извлечение штифта анкерного/титанового, простое", "1 000 руб."],
      ["Извлечение штифта анкерного/титанового, сложное", "1 500 руб."],
      ["Механическое расширение 1 к/к ручными инструментами", "600 руб."],
      ["Механическое расширение 1 к/к никельтитановыми инструментами", "650 руб."],
      ["Медикаментозная обработка 1 к/к", "400 руб."],
      ["Ультразвуковая обработка 1 к/к", "150 руб."],
      ["Стерилизация 1 к/к лазером doctorSMILE, Picasso Lite, FONA Laser", "600 руб."],
      ["Анестезия", "550 руб."],
      ["Пломбирование 1 к/к методом латеральной конденсации гуттаперчевыми штифтами", "2 000 руб."],
      ["Пломбирование к/к методом латеральной конденсации гуттаперчевыми штифтами", "3 800 руб."],
      ["Пломбирование 2 к/к методом латеральной конденсации гуттаперчевыми штифтами", "2 850 руб."],
      ["Пломбирование 3 к/к методом латеральной конденсации гуттаперчевыми штифтами", "3 750 руб."],
      ["Пломбирование 4 к/к методом латеральной конденсации гуттаперчевыми штифтами", "4 000 руб."],
      ["Временное пломбирование остеотропными материалами: гидроокись кальция, Каласепт, Витал", "1 000 руб."],
      ["Использование жидкостей для расширения и выявления устьев корневых каналов", "200 руб."],
      ["Наложение лечебной повязки Крезофен, Пульпосептин", "500 руб."],
      ["Закрытие перфорации ProRoot", "700 руб."],
      ["Фиксация парапульпарного штифта", "1 000 руб."],
      ["Фиксация титанового штифта", "1 000 руб."],
      ["Фиксация стекловолоконного штифта", "1 300 руб."],
      ["Инфильтрационная, проводниковая анестезия", "550 руб."],
      ["Декоративное украшение зуба - Скайс", "2 000 руб."],
      ["Герметизация фиссур 1 зуба", "2 000 руб."],
      ["Микропротез на стекловолоконной шине при адентии, 1 единица", "8 000 руб."],
      ["Препарирование полости / Снятие пломбы", "200 руб."],
      ["Пломба из СИЦ (стеклоиономерного цемента)", "2 000 руб."],
      ["Пломба светового отверждения производства USA, Германия, Япония, Италия на 2-3 поверхности", "3 500 руб."],
      ["Пломба светового отверждения производства USA, Германия, Япония, Италия на 1 поверхность", "3 000 руб."],
      ["Реставрация зуба (ламинирование) световым материалом производства Германия, Италия", "8 000 руб."]
    ]
  },
  {
    title: "Пародонтология",
    tag: "Десны и лазерные методики",
    lead: "Лечение дёсен, профессиональная гигиена и шинирование.",
    items: [
      ["Компьютерная рентген-диагностика", "550 руб."],
      ["Анестезия", "550 руб."],
      ["Снятие зубных отложений, 1 единица", "200 руб."],
      ["Лечение десен лазером Picasso + Vector, 1 сеанс", "2 000 руб."],
      ["Курс лечения десен лазером Picasso + Vector", "10 000 руб."],
      ["Введение в пародонтальный карман лекарственного препарата", "400 руб."],
      ["Избирательное пришлифовывание 1 зуба", "150 руб."],
      ["Иссечение гипертрофированной десны лазером", "2 000 руб."],
      ["Иссечение капюшона лазером", "1 500 руб."],
      ["Коагуляция десны лазером", "800 руб."],
      ["Инъекция лекарства", "150 руб."],
      ["Шинирование зубов системой Ribbond, 6 зубов", "8 000 руб."],
      ["Шинирование зубов системой Ribbond, 3 зуба", "4 000 руб."],
      ["Лечение стоматита и герпеса лазером, 1 прием", "800 руб."],
      ["Медикаментозная обработка пародонтального кармана в области одного зуба", "400 руб."],
      ["Наложение лечебной повязки на одну челюсть, Диплен-лента", "400 руб."],
      ["Обработка 1 пародонтального канала лазером", "800 руб."],
      ["Профессиональная чистка зубов пастой Detartrin Z", "2 000 руб."],
      ["Профессиональная комплексная чистка полости рта", "4 500 руб."],
      ["Реминерализующая терапия, покрытие фторсодержащими препаратами, 1 зуб", "250 руб."],
      ["Реминерализующая терапия, покрытие фторсодержащими препаратами, 1 челюсть", "600 руб."]
    ]
  },
  {
    title: "Хирургия и имплантология",
    tag: "Удаление, пластика, импланты",
    lead: "Удаление, костная пластика, синус-лифтинг и имплантация.",
    items: [
      ["Консервация лунки", "5 000 руб."],
      ["Компьютерная рентген-диагностика", "550 руб."],
      ["Анестезия", "550 руб."],
      ["Удаление зуба простое", "1 500 руб."],
      ["Удаление зуба сложное", "2 800 руб."],
      ["Удаление молочного зуба", "1 000 руб."],
      ["Удаление ретинированного зуба", "5 000 руб."],
      ["Удаление ретинированного зуба с выпиливанием кортикальной пластинки", "6 000 руб."],
      ["Удаление зуба при пародонтите 2 степени", "1 000 руб."],
      ["Удаление зуба при пародонтите 2-3 степени", "500 руб."],
      ["Удаление фрагмента зуба", "800 руб."],
      ["Пластика свища гайморовой пазухи", "2 350 руб."],
      ["Периостотомия, разрез при периостите, перикоронарите, дренирование раны", "1 500 руб."],
      ["Гемисекция", "2 500 руб."],
      ["Цистэктомия в области 1 зуба", "2 500 руб."],
      ["Резекция верхушки корня без костного материала", "10 000 руб."],
      ["Хирургическое лечение перикоронита лазером", "2 500 руб."],
      ["Удаление экзостоза, в области 1 зуба", "1 000 руб."],
      ["Гингивотомия в области одного зуба", "850 руб."],
      ["Вскрытие пародонтального абсцесса", "1 000 руб."],
      ["Лечение альвеолита, ревизия лунки", "1 200 руб."],
      ["Наложение швов: Викрил, Мопилен, ПГА, Полиамид", "800 руб."],
      ["Установка имплантата Osstem TS 3 SA", "40 000 руб."],
      ["Установка имплантата Osstem TS 3 CA, в растворе кальция", "42 000 руб."],
      ["Установка имплантата Straumann SLA", "55 000 руб."],
      ["Установка формирователя десны", "2 500 руб."],
      ["Установка имплантата Straumann SLActive, в растворе", "57 000 руб."],
      ["Операция Синус-лифтинг, открытый", "25 000 руб."],
      ["Операция Синус-лифтинг, закрытый", "15 000 руб."],
      ["Установка резорбируемой мембраны 25x25", "15 000 руб."],
      ["Установка резорбируемой мембраны 25x25 (1/2)", "7 000 руб."],
      ["Установка нерезорбируемой мембраны Cytoplast, PTFE", "11 000 руб."],
      ["Установка титановой сетки", "6 000 руб."],
      ["Костный материал Bego-os, Apatos, Bio-oss 0,5", "15 000 руб."],
      ["Костный материал Bego-os, Apatos, Bio-oss 0,2", "10 000 руб."],
      ["Костный материал Bego-os, Apatos, Bio-oss 0,1", "5 000 руб."],
      ["Фиксирующий винт", "1 100 руб."],
      ["Расщепление альвеолярного гребня в области 1 зуба", "15 000 руб."],
      ["Расщепление альвеолярного гребня в области 1 сегмента", "20 000 руб."],
      ["Перевязка, медобработка", "300 руб."],
      ["Ретроградное пломбирование", "1 500 руб."],
      ["Ампутация корня", "2 100 руб."],
      ["Применение коллагенового, кортикально-губчатого блока", "12 000 руб."],
      ["Подсечение уздечки губы, языка лазером", "500 руб."],
      ["Пластика уздечки губы, языка лазером", "4 000 руб."],
      ["Удаление импланта простое", "2 200 руб."],
      ["Удаление импланта сложное", "4 500 руб."],
      ["Операция по направленной костно-тканевой регенерации в области одного зуба", "9 000 руб."],
      ["Операция по направленной костно-тканевой регенерации сегмента", "20 000 руб."],
      ["Закрытый кюретаж в области одного зуба", "2 000 руб."],
      ["Открытый кюретаж в области одного зуба", "4 000 руб."],
      ["Лоскутная операция в области одного зуба", "3 000 руб."],
      ["Локальная пластика преддверия полости рта", "10 000 руб."],
      ["Вестибулопластика верхней челюсти", "5 700 руб."],
      ["Вестибулопластика нижней челюсти", "5 700 руб."],
      ["Пластика щечного тяжа", "2 000 руб."],
      ["Забор свободного трансплантата субэпителиального небного", "2 500 руб."]
    ]
  },
  {
    title: "Ортопедия",
    tag: "Коронки, протезы",
    lead: "Коронки, протезирование, абатменты и конструкции на имплантах.",
    items: [
      ["Фиксация культевой вкладки", "800 руб."],
      ["Коронка металлокерамическая на имплантате Straumann с винтовой фиксацией", "28 000 руб."],
      ["Бюгельный протез многозвеньевой", "36 000 руб."],
      ["Частичный бюгель", "15 000 руб."],
      ["Коронка металлокерамическая с фрезерованием", "9 800 руб."],
      ["Коронка цельнолитая с фрезерованием", "4 600 руб."],
      ["Замковое соединение к бюгельному протезу простое", "9 100 руб."],
      ["Замковое соединение к бюгельному протезу сложное", "13 200 руб."],
      ["Кламер нейлоновый", "3 000 руб."],
      ["Облицовка замкового соединения к бюгельному протезу", "2 800 руб."],
      ["Облицовка телескопической коронки", "4 500 руб."],
      ["Напыление бюгельного протеза", "2 000 руб."],
      ["Покрытие бюгельного протеза золотом 999,9", "4 500 руб."],
      ["Телескопическая коронка золото 999,9", "21 000 руб."],
      ["Починка бюгельного протеза", "7 200 руб."],
      ["Замена матриц на замковом бюгельном протезе", "2 400 руб."],
      ["Анестезия", "550 руб."],
      ["Снятие металлокерамической коронки", "1 000 руб."],
      ["Снятие цельнолитой коронки", "1 000 руб."],
      ["Снятие штампованной коронки", "800 руб."],
      ["Снятие слепка массой Bisico, Германия", "2 500 руб."],
      ["Фиксация коронки на Fuji, Япония", "1 000 руб."],
      ["Снятие слепка альгинатной массой", "1 200 руб."],
      ["Снятие слепка силиконовой массой", "2 000 руб."],
      ["Восстановление фасетки в полости рта светоотверждаемым материалом Cimara", "5 000 руб."],
      ["Регистрация прикуса на восковом базисе", "500 руб."],
      ["Обследование и диагностика в артикуляторе KaVo, Германия", "7 400 руб."],
      ["Компьютерная рентген-диагностика", "450 руб."],
      ["Консультация", "400 руб."],
      ["Коронка стальная, штампованная", "3 000 руб."],
      ["Коронка временная Re-fine, Япония", "1 000 руб."],
      ["Коронка цельнолитая, сплав КХС Eisenbacher", "5 000 руб."],
      ["Напыление", "400 руб."],
      ["Коронка металлокерамическая, Ivoclar Германия", "9 500 руб."],
      ["Зуб литой", "5 000 руб."],
      ["Безметалловая керамика E-max, Ivoclar", "10 000 руб."],
      ["Коронка керамическая на оксиде циркония", "20 000 руб."],
      ["Коронка цельноциркониевая, Prittao", "15 000 руб."],
      ["Коронка E-maxCAD", "12 000 руб."],
      ["Вкладка культевая однокорневая", "3 000 руб."],
      ["Вкладка культевая ZnO", "7 000 руб."],
      ["Коронка металлокерамическая на имплантате по технологии Osstem", "13 000 руб."],
      ["Коронка металлокерамическая на имплантате с винтовой фиксацией Osstem", "25 500 руб."],
      ["Коронка металлокерамическая на имплантате Straumann", "18 500 руб."],
      ["Коронка оксидциркониевая винтовая на имплантате Straumann", "42 500 руб."],
      ["Коронка керамическая с винтовой фиксацией", "18 000 руб."],
      ["Коронка оксидциркониевая с винтовой фиксацией Osstem", "32 500 руб."],
      ["Коронка оксидциркониевая на импланте Osstem", "20 000 руб."],
      ["Абатмент системы Osstem, стандартный", "12 500 руб."],
      ["Абатмент оксидциркониевый, индивидуальный CADCAM", "16 000 руб."],
      ["Абатмент индивидуальный титан Straumann", "15 500 руб."],
      ["Абатмент индивидуальный титан, CADCAM", "15 500 руб."],
      ["Частичный, полный съемный протез Yamayachi, Япония", "20 000 руб."],
      ["Полный съемный протез ACRI FREE", "26 400 руб."],
      ["Частичный, полный съемный протез Ivoclar, Германия", "22 000 руб."],
      ["Косметический протез на 1-2 зуба", "4 950 руб."],
      ["Нейлоновый протез", "25 000 руб."],
      ["Индивидуальная ложка", "2 500 руб."],
      ["Армирование протеза", "5 400 руб."],
      ["Починка съемного протеза", "4 500 руб."],
      ["Перебазировка съемного протеза", "4 500 руб."],
      ["Бюгельный протез на кламмерах с дублирующей моделью", "35 000 руб."],
      ["Частичный, полный съемный протез Pala press", "28 000 руб."],
      ["Винт EBONY GOLD для абатмента Osstem", "15 000 руб."],
      ["Десневая керамическая масса", "1 800 руб."]
    ]
  }
];

const legalContent = {
  privacy: `
    <h3>Политика конфиденциальности</h3>
    <p>Настоящая политика определяет порядок обработки персональных данных посетителей сайта клиники «Стоматология Андрея Ивлева».</p>
    <h4>1. Какие данные могут обрабатываться</h4>
    <p>Сайт не содержит формы онлайн-записи. При посещении сайта могут обрабатываться технические данные, необходимые для корректной работы сайта, а также данные, которые пользователь самостоятельно сообщает при обращении по телефону.</p>
    <h4>2. Цель обработки данных</h4>
    <p>Персональные данные используются для обратной связи с пациентом, предоставления информации об услугах клиники и выполнения требований законодательства РФ.</p>
    <h4>3. Защита данных</h4>
    <p>Оператор принимает разумные организационные и технические меры для защиты информации от утраты, изменения и несанкционированного доступа.</p>
    <h4>4. Передача третьим лицам</h4>
    <p>Данные не передаются третьим лицам, кроме случаев, прямо предусмотренных законодательством РФ.</p>
    <h4>5. Контакты оператора</h4>
    <p>ООО «Стоматология А.И.», ИНН 8605022766, адрес: 628680, ХМАО-Югра, г. Мегион, ул. 50 Лет Октября, д. 6.</p>
  `,
  consent: `
    <h3>Согласие на обработку персональных данных</h3>
    <p>Пользователь, обращаясь в клинику по указанным на сайте контактам, подтверждает согласие на обработку персональных данных в объеме, необходимом для ответа на обращение и организации взаимодействия по медицинским услугам.</p>
    <h4>Согласие включает</h4>
    <ul>
      <li>сбор и хранение сведений, сообщенных пользователем добровольно;</li>
      <li>использование данных для обратной связи и уточнения деталей обращения;</li>
      <li>обработку данных в течение срока, необходимого для достижения цели обращения, или в срок, установленный законодательством РФ.</li>
    </ul>
    <h4>Отзыв согласия</h4>
    <p>Пользователь вправе отозвать согласие, направив письменное обращение оператору персональных данных по юридическому адресу организации.</p>
  `
};

const replacements = [
  ["USA, Германия, Япония, Италия", "USA — Германия — Япония — Италия"],
  ["Япония, Италия, USA", "Япония — Италия — USA"],
  ["USA, Германия", "USA — Германия"],
  ["Германия, Италия", "Германия — Италия"],
  ["Calcimol, Лайф, Дайкал, Vitremer, Фуджи", "Calcimol — Лайф — Дайкал — Vitremer — Фуджи"],
  ["Ионосит, Фуджи", "Ионосит — Фуджи"],
  ["Викрил, Мопилен, ПГА, Полиамид", "Викрил — Мопилен — ПГА — Полиамид"],
  ["Bego-os, Apatos, Bio-oss", "Bego-os — Apatos — Bio-oss"],
  ["Bisico, Германия", "Bisico — Германия"],
  ["Fuji, Япония", "Fuji — Япония"],
  ["KaVo, Германия", "KaVo — Германия"],
  ["Yamayachi, Япония", "Yamayachi — Япония"],
  ["Ivoclar, Германия", "Ivoclar — Германия"],
  ["\"Висцин\", \"Унифас\"", "\"Висцин\" — \"Унифас\""],
  ["doctorSMILE, Picasso Lite, FONA Laser", "doctorSMILE — Picasso Lite — FONA Laser"],
  ["гидроокись кальция, Каласепт, Витал", "гидроокись кальция — Каласепт — Витал"],
  ["Крезофен, Пульпосептин", "Крезофен — Пульпосептин"],
  ["Septomak, Md-Temp", "Septomak — Md-Temp"],
  ["Re-fine, Япония", "Re-fine — Япония"],
  ["E-max, Ivoclar", "E-max — Ivoclar"],
  ["Ivoclar Германия", "Ivoclar — Германия"],
  ["Cytoplast, PTFE", "Cytoplast — PTFE"]
];

function normalizeDisplayText(value) {
  return replacements.reduce((result, entry) => result.replaceAll(entry[0], entry[1]), value);
}

const servicePageConfigs = [
  {
    slug: "therapy",
    sourceTitle: "Терапия",
    title: "Лечение зубов",
    label: "Терапевтическая стоматология",
    url: "therapy.html",
    doctor: {
      name: "Кузьменко Татьяна Александровна",
      url: "doctor-kuzmenko.html"
    },
    description: "Диагностика, лечение кариеса и каналов, аккуратные реставрации и восстановление формы зуба.",
    menuDescription: "Консультация, терапевтическое лечение и восстановление зубов с понятным планом и прозрачным прайсом.",
    priceGroups: [
      {
        id: "diagnostics",
        label: "Консультация и диагностика",
        description: "Первичный прием, осмотр и диагностические снимки.",
        patterns: [/Осмотр|Консультац|рентген/i]
      },
      {
        id: "canals",
        label: "Лечение каналов",
        description: "Эндодонтические этапы, обработка и пломбирование каналов.",
        patterns: [/к\/к|канал|Распломбиров|стерилизац|инородного тела|гуттаперч|устьев корневых/i]
      },
      {
        id: "restoration",
        label: "Пломбы и реставрации",
        description: "Восстановление формы, функции и эстетики зуба.",
        patterns: [/Восстановление|Реставра|Пломба|ламинирование|Герметизац|Скайс|микропротез/i]
      },
      {
        id: "care",
        label: "Подготовка и анестезия",
        description: "Подготовительные и вспомогательные манипуляции.",
        patterns: [/Анестезия|прокладк|Обработка полости|Шлифовка|Временн|Перфораци|Препарирование|Фиксация/i]
      }
    ]
  },
  {
    slug: "periodontology",
    sourceTitle: "Пародонтология",
    title: "Пародонтология",
    label: "Десны, гигиена и шинирование",
    url: "periodontology.html",
    doctor: {
      name: "Кузьменко Татьяна Александровна",
      url: "doctor-kuzmenko.html"
    },
    description: "Лечение десен, профессиональная гигиена и шинирование в одной странице направления.",
    menuDescription: "Комплексный уход за деснами, гигиена полости рта, лазерные методики и шинирование.",
    priceGroups: [
      {
        id: "diagnostics",
        label: "Прием и диагностика",
        description: "Первичный прием и базовая диагностика.",
        patterns: [/рентген|Анестезия/i]
      },
      {
        id: "gum-care",
        label: "Лечение десен",
        description: "Терапия десен, карманов и мягких тканей.",
        patterns: [/десен|десны|пародонт|карман|канал|стоматита|герпеса|Иссечение|Коагуляци|Инъекци|повязк/i]
      },
      {
        id: "hygiene",
        label: "Профессиональная гигиена",
        description: "Чистка, снятие отложений и реминерализация.",
        patterns: [/чистк|Снятие зубных отложений|Реминерализ/i]
      },
      {
        id: "splinting",
        label: "Шинирование",
        description: "Стабилизация подвижных зубов и поддержка тканей.",
        patterns: [/Шинирован/i]
      }
    ]
  },
  {
    slug: "surgery-implantology",
    sourceTitle: "Хирургия и имплантология",
    title: "Хирургия и имплантация",
    label: "Удаление, импланты и костная подготовка",
    url: "surgery-implantology.html",
    doctor: {
      name: "Кузьменко Татьяна Александровна",
      url: "doctor-kuzmenko.html"
    },
    description: "Плановые удаления, имплантация, синус-лифтинг и костная пластика с прозрачной логикой лечения.",
    menuDescription: "Хирургический прием, имплантация и костная подготовка в одном структурированном разделе.",
    priceGroups: [
      {
        id: "diagnostics",
        label: "Диагностика и контроль",
        description: "Снимки, анестезия и контрольные этапы лечения.",
        patterns: [/рентген|Анестезия|Перевязка|медобработ/i]
      },
      {
        id: "surgery",
        label: "Хирургические манипуляции",
        description: "Удаления, пластика мягких тканей и пародонтологическая хирургия.",
        patterns: [/Удаление(?! имплант)|Альвеолит|абсцесса|Периостотомия|Гемисекция|Цистэктомия|Резекция|Гингивотомия|Пластика свища|экзостоза|Ампутация корня|кюретаж|лоскутная|преддверия|Вестибулопластика|уздечки/i]
      },
      {
        id: "implantation",
        label: "Имплантация",
        description: "Установка имплантов и формирователей десны.",
        patterns: [/имплант|формировател/i]
      },
      {
        id: "bone-grafting",
        label: "Костная пластика",
        description: "Синус-лифтинг, мембраны и материалы для подготовки объема.",
        patterns: [/Синус-лифтинг|мембран|титанов[а-я ]*сетк|Костный материал|винт|Регенераци|Расщепление|коллагенового|трансплантат/i]
      }
    ]
  },
  {
    slug: "orthopedics",
    sourceTitle: "Ортопедия",
    title: "Протезирование и ортопедия",
    label: "Коронки и конструкции на имплантах",
    url: "orthopedics.html",
    doctor: {
      name: "Ивлев Андрей Михайлович",
      url: "doctor-ivlev.html"
    },
    description: "Коронки, съемные и несъемные конструкции, а также протезирование на имплантах.",
    menuDescription: "Ортопедическое лечение для восстановления функции, высоты прикуса и эстетики улыбки.",
    priceGroups: [
      {
        id: "diagnostics",
        label: "Диагностика и подготовка",
        description: "Консультация, слепки, диагностика и подготовительные этапы.",
        patterns: [/Консультац|рентген|диагностик|Анестезия|Снятие слепка|Регистрация прикуса|Снятие .*коронки|Фиксация культевой вкладки|Фиксация коронки|Индивидуальная ложка/i]
      },
      {
        id: "implant-prosthetics",
        label: "Протезирование на имплантах",
        description: "Коронки и абатменты для имплантологического лечения.",
        patterns: [/имплант|Абатмент|винтов/i]
      },
      {
        id: "crowns",
        label: "Коронки и вкладки",
        description: "Несъемные эстетические и функциональные конструкции.",
        patterns: [/Коронка|E-max|циркони|Безметалловая|Вкладка культевая|Зуб литой/i]
      },
      {
        id: "removable",
        label: "Съемное протезирование",
        description: "Съемные протезы, бюгельные конструкции и сервисные работы.",
        patterns: [/протез|бюгель|Кламер|матриц|Телескопическ|Починка|Перебазиров|Армирование|нейлон|Напыление\b/i]
      }
    ]
  }
];

const serviceDataLookup = new Map(
  serviceData.map((service) => [normalizeDisplayText(service.title), service])
);

const servicePageLookup = new Map(
  servicePageConfigs.map((config) => [config.slug, config])
);

const serviceCardConfigs = [
  {
    id: "therapy",
    title: "Лечение зубов",
    description: "Кариес, пульпит, периодонтит, лечение кист консервативным методом, реставрации.",
    url: "therapy.html",
    priceSource: { slug: "therapy" }
  },
  {
    id: "periodontology",
    title: "Пародонтология",
    description: "Профессиональная гигиена, безболезненное лечение десен лазером, шинирование зубов.",
    url: "periodontology.html",
    priceSource: { slug: "periodontology" }
  },
  {
    id: "surgery",
    title: "Хирургия",
    description: "Удаление и хирургический прием.",
    url: "surgery-implantology.html#surgery-implantology-surgery",
    priceSource: { slug: "surgery-implantology", group: "surgery" }
  },
  {
    id: "implantation",
    title: "Имплантация",
    description: "Имплантация и костная пластика.",
    url: "surgery-implantology.html#surgery-implantology-implantation",
    priceSource: { slug: "surgery-implantology", group: "implantation" }
  },
  {
    id: "orthopedics",
    title: "Протезирование",
    description: "Коронки, протезы, конструкции.",
    url: "orthopedics.html",
    priceSource: { slug: "orthopedics" }
  },
  {
    id: "laser-treatment",
    title: "Лазерное лечение",
    description: "Лечение дёсен, операции без скальпеля.",
    url: "periodontology.html#periodontology-gum-care",
    priceSource: { slug: "periodontology", group: "gum-care" }
  }
];

const serviceGroupsCache = new Map();
const servicesMenuInstances = [];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatServicePositions(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return `${count} позиция`;
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return `${count} позиции`;
  }

  return `${count} позиций`;
}

function matchesGroup(name, patterns) {
  return patterns.some((pattern) => pattern.test(name));
}

function getServicePageMeta(serviceConfigOrSlug) {
  const serviceConfig =
    typeof serviceConfigOrSlug === "string"
      ? servicePageLookup.get(serviceConfigOrSlug)
      : serviceConfigOrSlug;

  if (!serviceConfig) {
    return null;
  }

  if (serviceGroupsCache.has(serviceConfig.slug)) {
    return serviceGroupsCache.get(serviceConfig.slug);
  }

  const sourceService = serviceDataLookup.get(serviceConfig.sourceTitle);

  if (!sourceService) {
    return null;
  }

  const items = sourceService.items.map((item) => ({
    name: normalizeDisplayText(item[0]),
    price: item[1]
  }));

  const grouped = serviceConfig.priceGroups.map((group) => ({
    ...group,
    items: []
  }));

  const otherGroup = {
    id: "other",
    label: "Другие позиции",
    description: "Дополнительные позиции по направлению.",
    items: []
  };

  items.forEach((item) => {
    const targetGroup = grouped.find((group) => matchesGroup(item.name, group.patterns));

    if (targetGroup) {
      targetGroup.items.push(item);
      return;
    }

    otherGroup.items.push(item);
  });

  const visibleGroups = grouped.filter((group) => group.items.length > 0);

  if (otherGroup.items.length > 0) {
    visibleGroups.push(otherGroup);
  }

  const meta = {
    config: serviceConfig,
    sourceService,
    itemCount: items.length,
    groups: visibleGroups,
    tag: normalizeDisplayText(sourceService.tag),
    lead: normalizeDisplayText(sourceService.lead)
  };

  serviceGroupsCache.set(serviceConfig.slug, meta);

  return meta;
}

function getServiceCardMeta(cardConfig) {
  const pageMeta = getServicePageMeta(cardConfig.priceSource.slug);

  if (!pageMeta) {
    return null;
  }

  return {
    ...cardConfig
  };
}

function buildServiceDirectoryCard(card, compact = false) {
  return `
    <article class="service-tile${compact ? " service-tile--compact" : ""}">
      <div class="service-tile__content">
        <h3>${escapeHtml(card.title)}</h3>
        <p class="service-tile__text">${escapeHtml(card.description)}</p>
      </div>
      <a class="button button-secondary service-tile__button" href="${card.url}">Подробнее</a>
    </article>
  `;
}

function buildServicePriceListMarkup(meta) {
  return `
    <div class="service-price-list__nav" aria-label="Категории прайса">
      ${meta.groups.map((group) => `
        <a class="service-price-list__chip" href="#${meta.config.slug}-${group.id}">
          ${escapeHtml(group.label)}
        </a>
      `).join("")}
    </div>

    <div class="service-price-list__groups">
      ${meta.groups.map((group) => `
        <article class="service-price-group" id="${meta.config.slug}-${group.id}">
          <div class="service-price-group__head">
            <div>
              <p class="service-price-group__eyebrow">${escapeHtml(group.description)}</p>
              <h3>${escapeHtml(group.label)}</h3>
            </div>
            <span class="service-price-group__count">${escapeHtml(formatServicePositions(group.items.length))}</span>
          </div>

          <div class="service-price-group__rows">
            ${group.items.map((item) => `
              <div class="service-price-row">
                <span class="service-price-row__name">${escapeHtml(item.name)}</span>
                <strong class="service-price-row__price">${escapeHtml(item.price)}</strong>
              </div>
            `).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function buildServicesMenuMarkup(overviewHref) {
  const cardsMarkup = serviceCardConfigs
    .map((cardConfig) => getServiceCardMeta(cardConfig))
    .filter(Boolean)
    .map((card) => buildServiceDirectoryCard(card, true))
    .join("");

  return `
    <div class="services-mega services-mega--minimal">
      <div class="services-mega__top">
        <div>
          <p class="services-mega__eyebrow">Услуги</p>
          <p class="services-mega__intro">Ключевые направления клиники без лишней вложенности.</p>
        </div>
        <a class="services-mega__overview-link" href="${overviewHref}">Весь раздел услуг</a>
      </div>
      <div class="services-mega__grid">
        ${cardsMarkup}
      </div>
    </div>
  `;
}

function closeAllServicesMenus(exceptElement) {
  servicesMenuInstances.forEach((instance) => {
    if (instance.element === exceptElement) {
      return;
    }

    instance.close();
  });
}

const beforeAfterLabelBefore = "\u0414\u043e";
const beforeAfterLabelAfter = "\u041f\u043e\u0441\u043b\u0435";
const beforeAfterCombinedLabel = "\u0414\u043e \u0438 \u043f\u043e\u0441\u043b\u0435";
const beforeAfterOpenCaseLabel = "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043a\u0435\u0439\u0441";

function buildBeforeAfterBeforeAlt(title) {
  return `\u0414\u043e \u043b\u0435\u0447\u0435\u043d\u0438\u044f: ${title}`;
}

function buildBeforeAfterAfterAlt(title) {
  return `\u041f\u043e\u0441\u043b\u0435 \u043b\u0435\u0447\u0435\u043d\u0438\u044f: ${title}`;
}

function buildBeforeAfterCollageAlt(title) {
  return `\u0414\u043e \u0438 \u043f\u043e\u0441\u043b\u0435 \u043b\u0435\u0447\u0435\u043d\u0438\u044f: ${title}`;
}

function createBeforeAfterPairCase(title, description, beforeSrc, afterSrc) {
  return {
    type: "pair",
    title,
    description,
    before: {
      src: beforeSrc,
      alt: buildBeforeAfterBeforeAlt(title)
    },
    after: {
      src: afterSrc,
      alt: buildBeforeAfterAfterAlt(title)
    }
  };
}

function createBeforeAfterCollageCase(title, description, previewSrc) {
  return {
    type: "collage",
    title,
    description,
    preview: {
      src: previewSrc,
      alt: buildBeforeAfterCollageAlt(title)
    }
  };
}

const beforeAfterCases = [
  createBeforeAfterPairCase(
    "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f \u0437\u0443\u0431\u043e\u0432",
    "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0440\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b",
    "assets/before-after/restoration-case-1-before.webp",
    "assets/before-after/restoration-case-1-after.webp"
  ),
  createBeforeAfterPairCase(
    "\u042d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f",
    "\u0414\u0435\u043b\u0438\u043a\u0430\u0442\u043d\u043e\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u044b \u0438 \u0446\u0432\u0435\u0442\u0430",
    "assets/before-after/restoration-case-2-before.webp",
    "assets/before-after/restoration-case-2-after.webp"
  ),
  createBeforeAfterPairCase(
    "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0443\u0431\u0430",
    "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u0438",
    "assets/before-after/restoration-case-3-before.webp",
    "assets/before-after/restoration-case-3-after.webp"
  ),
  createBeforeAfterCollageCase(
    "\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0442\u0440\u0435\u043c \u0438 \u0444\u0438\u043a\u0441\u0430\u0446\u0438\u044f \u0437\u0443\u0431\u043e\u0432",
    "\u0421\u0442\u0435\u043a\u043b\u043e\u0432\u043e\u043b\u043e\u043a\u043e\u043d\u043d\u0430\u044f \u0448\u0438\u043d\u0430 \u0438 \u044d\u0441\u0442\u0435\u0442\u0438\u043a\u0430",
    "assets/before-after/trema-fixation-splint-collage.png"
  ),
  createBeforeAfterCollageCase(
    "\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u043e\u0432\u043e\u043b\u043e\u043a\u043e\u043d\u043d\u043e\u0439 \u0448\u0438\u043d\u044b",
    "\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u044d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u044f\u043c",
    "assets/before-after/splint-replacement-restoration-collage.png"
  ),
  createBeforeAfterCollageCase(
    "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0437\u0443\u0431\u0430 3.1",
    "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f \u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u043e\u0432\u043e\u043b\u043e\u043a\u043e\u043d\u043d\u043e\u0439 \u0448\u0438\u043d\u0435",
    "assets/before-after/tooth-31-restoration-collage.png"
  ),
  createBeforeAfterCollageCase(
    "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0438 \u0434\u0438\u0441\u043a\u043e\u043b\u043e\u0440\u0438\u0442\u0435",
    "\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438 \u0444\u043e\u0440\u043c\u044b",
    "assets/before-after/discoloration-restoration-collage.png"
  ),
  createBeforeAfterCollageCase(
    "\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0443\u0431\u0430 1.2 \u0432 \u0440\u044f\u0434",
    "\u042d\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u0444\u0440\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b",
    "assets/before-after/tooth-12-alignment-collage.png"
  ),
  createBeforeAfterCollageCase(
    "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0441\u043b\u0435 \u0441\u043d\u044f\u0442\u0438\u044f \u043a\u043e\u0440\u043e\u043d\u043e\u043a",
    "\u0417\u0430\u043a\u0440\u044b\u0442\u0438\u0435 \u0442\u0440\u0435\u043c \u0438 \u0434\u0438\u0430\u0441\u0442\u0435\u043c",
    "assets/before-after/post-crown-restoration-collage.png"
  ),
  createBeforeAfterCollageCase(
    "\u0420\u0435\u0441\u0442\u0430\u0432\u0440\u0430\u0446\u0438\u044f \u0441 \u0440\u0430\u0437\u0432\u043e\u0440\u043e\u0442\u043e\u043c",
    "\u041a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u044f \u0444\u043e\u0440\u043c\u044b \u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f",
    "assets/before-after/rotation-restoration-collage.png"
  )
];

function getBeforeAfterCardMedia(caseItem) {
  if (caseItem.type === "pair") {
    return `
      <span class="before-after-card__media before-after-card__media--pair">
        <span class="before-after-pair-preview">
          <span class="before-after-pair-preview__item">
            <img class="before-after-card__image" src="${caseItem.before.src}" alt="${caseItem.before.alt}" loading="lazy" decoding="async">
            <span class="before-after-card__badge before-after-card__badge--split">${beforeAfterLabelBefore}</span>
          </span>
          <span class="before-after-pair-preview__item">
            <img class="before-after-card__image" src="${caseItem.after.src}" alt="${caseItem.after.alt}" loading="lazy" decoding="async">
            <span class="before-after-card__badge before-after-card__badge--split">${beforeAfterLabelAfter}</span>
          </span>
        </span>
      </span>
    `;
  }

  return `
    <span class="before-after-card__media">
      <img class="before-after-card__image" src="${caseItem.preview.src}" alt="${caseItem.preview.alt}" loading="lazy" decoding="async">
      <span class="before-after-card__badge">${beforeAfterCombinedLabel}</span>
    </span>
  `;
}

function getBeforeAfterCardMarkup(caseItem, index) {
  return `
    <button class="before-after-card" type="button" data-before-after-index="${index}" aria-controls="before-after-lightbox" aria-haspopup="dialog" aria-label="${beforeAfterOpenCaseLabel}: ${caseItem.title}">
      ${getBeforeAfterCardMedia(caseItem)}
      <span class="before-after-card__body">
        <span class="before-after-card__title">${caseItem.title}</span>
        <span class="before-after-card__text">${caseItem.description}</span>
      </span>
    </button>
  `;
}

function initBeforeAfterGallery() {
  const grid = document.querySelector("#before-after-grid");
  const dialog = document.querySelector("#before-after-lightbox");

  if (!grid) {
    return;
  }

  grid.innerHTML = beforeAfterCases
    .map((caseItem, index) => getBeforeAfterCardMarkup(caseItem, index))
    .join("");

  if (!dialog || typeof dialog.showModal !== "function") {
    return;
  }

  const titleNode = dialog.querySelector("#before-after-lightbox-title");
  const descriptionNode = dialog.querySelector("#before-after-lightbox-description");
  const collageNode = dialog.querySelector("[data-before-after-collage]");
  const pairNode = dialog.querySelector("[data-before-after-pair]");
  const beforeNode = dialog.querySelector("[data-before-after-image='before']");
  const afterNode = dialog.querySelector("[data-before-after-image='after']");
  const closeNodes = dialog.querySelectorAll("[data-before-after-close]");

  if (
    !titleNode ||
    !descriptionNode ||
    !collageNode ||
    !pairNode ||
    !beforeNode ||
    !afterNode
  ) {
    return;
  }

  const resetDialog = () => {
    titleNode.textContent = "";
    descriptionNode.textContent = "";
    collageNode.hidden = true;
    collageNode.removeAttribute("src");
    collageNode.alt = "";
    pairNode.hidden = true;
    beforeNode.removeAttribute("src");
    beforeNode.alt = "";
    afterNode.removeAttribute("src");
    afterNode.alt = "";
  };

  closeNodes.forEach((node) => {
    node.addEventListener("click", () => {
      dialog.close();
    });
  });

  dialog.addEventListener("close", resetDialog);

  grid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-before-after-index]");

    if (!trigger) {
      return;
    }

    const index = Number(trigger.dataset.beforeAfterIndex);
    const caseItem = beforeAfterCases[index];

    if (!caseItem) {
      return;
    }

    if (dialog.open) {
      dialog.close();
    }

    titleNode.textContent = caseItem.title;
    descriptionNode.textContent = caseItem.description;

    if (caseItem.type === "pair") {
      beforeNode.setAttribute("src", caseItem.before.src);
      beforeNode.setAttribute("alt", caseItem.before.alt);
      afterNode.setAttribute("src", caseItem.after.src);
      afterNode.setAttribute("alt", caseItem.after.alt);
      pairNode.hidden = false;
      collageNode.hidden = true;
      collageNode.removeAttribute("src");
      collageNode.alt = "";
    } else {
      collageNode.setAttribute("src", caseItem.preview.src);
      collageNode.setAttribute("alt", caseItem.preview.alt);
      collageNode.hidden = false;
      pairNode.hidden = true;
      beforeNode.removeAttribute("src");
      beforeNode.alt = "";
      afterNode.removeAttribute("src");
      afterNode.alt = "";
    }

    dialog.showModal();
  });
}

function renderServices() {
  const container = document.querySelector("#service-cards");

  if (!container) {
    return;
  }

  const cardsMarkup = serviceCardConfigs
    .map((cardConfig) => getServiceCardMeta(cardConfig))
    .filter(Boolean)
    .map((card) => buildServiceDirectoryCard(card))
    .join("");

  container.innerHTML = `<div class="services-directory">${cardsMarkup}</div>`;
}

function renderServicePriceLists() {
  const containers = document.querySelectorAll("[data-service-price]");

  containers.forEach((container) => {
    const meta = getServicePageMeta(container.dataset.servicePrice);

    if (!meta) {
      return;
    }

    container.innerHTML = buildServicePriceListMarkup(meta);
  });
}

function initServicesMegaMenu() {
  const navs = document.querySelectorAll(".site-nav");
  const closeDelayMs = 180;

  navs.forEach((nav, index) => {
    if (nav.querySelector(".services-nav")) {
      return;
    }

    const servicesLink = Array.from(nav.querySelectorAll("a")).find((link) => {
      const href = link.getAttribute("href") || "";
      const label = (link.textContent || "").trim();

      return label === "Услуги" || href === "#services" || href === "index.html#services";
    });

    if (!servicesLink) {
      return;
    }

    const navId = `services-nav-${index + 1}`;
    const overviewHref = servicesLink.getAttribute("href") || "index.html#services";
    const wrapper = document.createElement("div");

    wrapper.className = "services-nav";
    wrapper.innerHTML = `
      <button
        class="site-nav-link services-nav__trigger"
        type="button"
        aria-haspopup="true"
        aria-expanded="false"
        aria-controls="${navId}-panel"
      >
        <span>Услуги</span>
        <span class="services-nav__caret" aria-hidden="true"></span>
      </button>
      <div class="services-nav__panel" id="${navId}-panel" hidden>
        ${buildServicesMenuMarkup(overviewHref)}
      </div>
    `;

    servicesLink.replaceWith(wrapper);

    if (document.body.classList.contains("page-services")) {
      wrapper.classList.add("is-current");
    }

    const trigger = wrapper.querySelector(".services-nav__trigger");
    const panel = wrapper.querySelector(".services-nav__panel");

    if (!trigger || !panel) {
      return;
    }

    let closeTimer = null;
    let suppressFocusOpen = false;

    const isDesktop = () => window.innerWidth > 760;

    const clearCloseTimer = () => {
      if (closeTimer !== null) {
        window.clearTimeout(closeTimer);
        closeTimer = null;
      }
    };

    const setOpen = (isOpen) => {
      clearCloseTimer();
      wrapper.classList.toggle("is-open", isOpen);
      trigger.setAttribute("aria-expanded", String(isOpen));
      panel.hidden = !isOpen;
    };

    const openMenu = () => {
      closeAllServicesMenus(wrapper);
      setOpen(true);
    };

    const closeMenu = (immediate = false) => {
      clearCloseTimer();

      if (immediate || !isDesktop()) {
        setOpen(false);
        return;
      }

      closeTimer = window.setTimeout(() => {
        setOpen(false);
      }, closeDelayMs);
    };

    trigger.addEventListener("pointerdown", () => {
      suppressFocusOpen = true;
    });

    trigger.addEventListener("focus", () => {
      if (!isDesktop() || suppressFocusOpen) {
        return;
      }

      openMenu();
    });

    trigger.addEventListener("blur", () => {
      suppressFocusOpen = false;
    });

    trigger.addEventListener("click", () => {
      const willOpen = !wrapper.classList.contains("is-open");

      if (willOpen) {
        openMenu();
      } else {
        closeMenu(true);
      }

      window.setTimeout(() => {
        suppressFocusOpen = false;
      }, 0);
    });

    trigger.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        openMenu();
        panel.querySelector("a")?.focus();
        return;
      }

      if (event.key === "Escape") {
        closeMenu(true);
        trigger.focus();
      }
    });

    wrapper.addEventListener("mouseenter", () => {
      if (window.innerWidth <= 760) {
        return;
      }

      openMenu();
    });

    wrapper.addEventListener("mouseleave", () => {
      if (window.innerWidth <= 760) {
        return;
      }

      closeMenu();
    });

    wrapper.addEventListener("focusout", (event) => {
      if (wrapper.contains(event.relatedTarget)) {
        return;
      }

      closeMenu(!isDesktop());
    });

    panel.addEventListener("mouseenter", clearCloseTimer);
    panel.addEventListener("focusin", clearCloseTimer);
    panel.addEventListener("mouseleave", () => {
      if (!isDesktop()) {
        return;
      }

      closeMenu();
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu(true));
    });

    servicesMenuInstances.push({
      element: wrapper,
      close: () => closeMenu(true)
    });
  });

  if (servicesMenuInstances.length === 0) {
    return;
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest(".services-nav")) {
      return;
    }

    closeAllServicesMenus();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllServicesMenus();
    }
  });
}

function injectLegalContent() {
  const privacyNode = document.querySelector("#privacy-content");
  const consentNode = document.querySelector("#consent-content");

  if (privacyNode) {
    privacyNode.innerHTML = legalContent.privacy;
  }

  if (consentNode) {
    consentNode.innerHTML = legalContent.consent;
  }
}

function bindDialogs() {
  const triggers = document.querySelectorAll("[data-dialog-target]");
  const dialogs = document.querySelectorAll("dialog");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const dialog = document.getElementById(trigger.dataset.dialogTarget);

      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  dialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const isInside = rect.top <= event.clientY && event.clientY <= rect.bottom && rect.left <= event.clientX && event.clientX <= rect.right;

      if (!isInside) {
        dialog.close();
      }
    });
  });
}

function bindDocumentLightbox() {
  const dialog = document.querySelector("#document-lightbox");
  const triggers = document.querySelectorAll("[data-document-trigger]");

  if (
    !dialog ||
    typeof dialog.showModal !== "function" ||
    triggers.length === 0
  ) {
    return;
  }

  const titleNode = dialog.querySelector("[id='document-lightbox-title']");
  const bodyNode = dialog.querySelector(".document-lightbox__body");
  const pdfNode = dialog.querySelector("[data-document-pdf]");
  const imageNode = dialog.querySelector("[data-document-image]");
  const openNode = dialog.querySelector("[data-document-open]");
  const closeNodes = dialog.querySelectorAll("[data-document-close]");

  if (!titleNode || !bodyNode || !pdfNode || !imageNode || !openNode) {
    return;
  }

  const buildPdfSource = (source) => `${source}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  const resetDialog = () => {
    bodyNode.dataset.documentMode = "";
    titleNode.textContent = "Просмотр документа";
    pdfNode.hidden = true;
    pdfNode.removeAttribute("src");
    imageNode.hidden = true;
    imageNode.removeAttribute("src");
    imageNode.alt = "";
    openNode.setAttribute("href", "#");
  };

  closeNodes.forEach((node) => {
    node.addEventListener("click", () => {
      dialog.close();
    });
  });

  dialog.addEventListener("close", resetDialog);

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      const source = trigger.dataset.documentSource || trigger.getAttribute("href");
      const type = trigger.dataset.documentType || "pdf";
      const title = trigger.dataset.documentTitle || "Просмотр документа";
      const alt = trigger.dataset.documentAlt || title;
      const href = trigger.getAttribute("href") || source;

      if (!source || !href) {
        return;
      }

      event.preventDefault();

      if (dialog.open) {
        dialog.close();
      }

      titleNode.textContent = title;
      openNode.setAttribute("href", href);

      if (type === "image") {
        bodyNode.dataset.documentMode = "image";
        imageNode.setAttribute("src", source);
        imageNode.setAttribute("alt", alt);
        imageNode.hidden = false;
        pdfNode.hidden = true;
        pdfNode.removeAttribute("src");
      } else {
        bodyNode.dataset.documentMode = "pdf";
        pdfNode.setAttribute("src", buildPdfSource(source));
        pdfNode.hidden = false;
        imageNode.hidden = true;
        imageNode.removeAttribute("src");
        imageNode.alt = "";
      }

      dialog.showModal();
    });
  });
}

function bindMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");

  if (!header || !toggle) {
    return;
  }

  const closeNav = () => {
    header.classList.remove("is-nav-open");
    toggle.setAttribute("aria-expanded", "false");
    closeAllServicesMenus();
  };

  const navLinks = document.querySelectorAll(".site-nav a, .services-nav__panel a");

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeNav();
    }
  });
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window) || window.innerWidth <= 760) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      currentObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -8% 0px"
  });

  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  initBeforeAfterGallery();
  initServicesMegaMenu();
  renderServices();
  renderServicePriceLists();
  injectLegalContent();
  bindDialogs();
  bindDocumentLightbox();
  bindMobileNav();
  initReveal();
});



