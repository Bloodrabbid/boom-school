export const instruments = ['Барабаны', 'Гитара', 'Пианино'];

export const questions: Record<string, Array<{ question: string; answers: string[]; key: string; condition?: { key: string; value: string }; dynamic_answers?: Record<string, string[]> }>> = {
  'Барабаны': [
    {
      question: "Итак, кто у нас тут решил стать новым Ринго Старром?",
      answers: [
        "Я сам! Готов греметь на весь район!",
        "Мой ребенок. Надеюсь, соседи не против?"
      ],
      key: "learner"
    },
    {
      question: "А сколько лет нашему будущему барабанному гению?",
      answers: [
        "3-5 лет (Еще не знает, что такое ритм, но уже в нем живет)",
        "6-8 лет (Как раз пора направить эту энергию в мирное русло)",
        "9-12 лет (Самое время стать звездой школьной группы)",
        "13+ (Готов к настоящему рок-н-роллу!)"
      ],
      key: "child_age",
      condition: {
        key: "learner",
        value: "Мой ребенок. Надеюсь, соседи не против?"
      }
    },
    {
      question: "Признавайся честно, уже пытался устроить концерт на кухонных кастрюлях?",
      answers: [
        "Абсолютный новичок (Кастрюли еще целы)",
        "Немного играл (Кастрюли уже видали виды)",
        "Средний уровень (У меня уже есть любимые барабанные палочки)",
        "Профи (Меня узнают в магазине музыкальных инструментов)"
      ],
      key: "experience"
    },
    {
      question: "Какой стиль музыки заставляет тебя дергаться как в припадке... эээ, я имею в виду, танцевать?",
      answers: [
        "Рок (Потому что рок не умер, он просто пахнет странно)",
        "Джаз (Потому что жизнь слишком коротка для предсказуемых ритмов)",
        "Поп (Потому что иногда хочется просто потрясти попой)",
        "Метал (Потому что соседи должны знать, что я существую)",
        "Все понемногу (Я музыкальный всеядный)"
      ],
      key: "music_style"
    },
    {
      question: "Учитывая твою любовь к {music_style}, что бы ты хотел уметь в первую очередь?",
      answers: [
        "Основы ритма (Чтобы наконец-то попадать в такт, танцуя на вечеринках)",
        "Крутые филлы (Чтобы все думали, что я крутой)",
        "Уметь играть и петь одновременно (Потому что я многозадачный)",
        "Импровизировать (Чтобы делать вид, что так и задумано, когда ошибаюсь)"
      ],
      key: "learning_focus",
      dynamic_answers: {
        "Рок (Потому что рок не умер, он просто пахнет странно)": [
          "Мощные бласт-биты (Чтобы соседи думали, что началось землетрясение)",
          "Игра ногами на двойной бочке (Отличная замена кардио)"
        ],
        "Джаз (Потому что жизнь слишком коротка для предсказуемых ритмов)": [
          "Свинговать как боги (Чтобы заставить даже ботаников танцевать)",
          "Игра щетками (Потому что это выглядит очень по-джазовому)"
        ],
        "Поп (Потому что иногда хочется просто потрясти попой)": [
          "Работа с электронными барабанами (Чтобы быть в тренде)",
          "Программирование ударных (Потому что роботы не должны захватить эту область)"
        ],
        "Метал (Потому что соседи должны знать, что я существую)": [
          "Бластбиты на скорости света (Чтобы руки горели, а соседи плакали)",
          "Сложные размеры (Чтобы даже математики были в шоке)"
        ]
      }
    },
    {
      question: "Зачем тебе вообще эта шумная авантюра?",
      answers: [
        "Просто для фана (Жизнь слишком серьезна, нужно иногда пошуметь)",
        "Хочу выступать (Мечтаю увидеть свое имя на афишах, пусть даже маленькими буквами)",
        "Для развития моторики (Потому что печатать двумя пальцами уже не круто)",
        "Стать звездой (Почему бы и нет? Мама говорит, что я особенный)"
      ],
      key: "goal",
      dynamic_answers: {
        "Я сам! Готов греметь на весь район!": [
          "Хочу в группу (Одному шуметь уже не так весело)",
          "Записать альбом (Потому что мир должен это услышать... или нет?)"
        ],
        "Мой ребенок. Надеюсь, соседи не против?": [
          "Развить творческие способности (И заодно найти применение его бесконечной энергии)",
          "Подготовка к музыкальной школе (Потому что обычной школы мало для полного счастья)"
        ]
      }
    },
    {
      question: "Учитывая твою цель {goal}, сколько времени ты готов стучать... то есть, практиковаться каждую неделю?",
      answers: [
        "1-2 часа (Я же не хочу, чтобы соседи совсем съехали)",
        "3-5 часов (Достаточно, чтобы прокачаться, но не превратиться в отшельника)",
        "6-10 часов (Серьезные намерения! Надеюсь, твоя семья готова)",
        "Больше 10 часов (Ты точно не робот, присланный с планеты Ударных?)"
      ],
      key: "practice_time"
    },
    {
      question: "Ну а теперь серьезный вопрос: тебя интересует музыкальная теория, или ты предпочитаешь метод научного тыка?",
      answers: [
        "Обожаю теорию! (Я из тех чудаков, кто читает инструкции)",
        "Немного теории не помешает (Но не перебарщивайте)",
        "Только практика! (Теория для слабаков, я буду учиться на своих ошибках)"
      ],
      key: "theory_interest"
    },
    {
      question: "Что тебя больше всего мотивирует?",
      answers: [
        "Возможность самовыражения (Потому что криком уже не получается)",
        "Стать круче Нила Пирта (Потому что цели должны быть амбициозными)",
        "Произвести впечатление на противоположный пол (Старый, но работающий метод)",
        "Сжечь калории (Потому что это веселее, чем бегать по утрам)"
      ],
      key: "motivation",
      dynamic_answers: {
        "Мой ребенок. Надеюсь, соседи не против?": [
          "Развить дисциплину (Потому что уговоры больше не работают)",
          "Дать ему то, чего не было у меня в детстве (Да, я знаю, это звучит как клише)"
        ]
      }
    },
    {
      question: "Учитывая твой уровень {experience} и любовь к {music_style}, готов ли ты устроить рок-н-ролл на публике?",
      answers: [
        "Конечно! Где записаться на ближайший концерт?",
        "Может быть, но сначала научусь попадать в ритм",
        "Нет, я скромный гений. Буду играть для себя и несчастных соседей",
        "Выступать? Я думал, это только для телевизора!"
      ],
      key: "performance_interest"
    }
  ],
  'Гитара': [
    {
      question: "Кто тут у нас решил стать новым Джими Хендриксом?",
      answers: [
        "Я сам! Уже готов рвать струны и сердца!",
        "Мой ребенок. Надеюсь, у него получится лучше, чем у меня"
      ],
      key: "learner"
    },
    {
      question: "А сколько лет нашему будущему гитарному герою?",
      answers: [
        "6-8 лет (Самое время научиться чему-то, кроме Twinkle Twinkle Little Star)",
        "9-12 лет (Готов покорить школьный музыкальный конкурс)",
        "13-16 лет (Пора собирать свою группу в гараже)",
        "17+ (Никогда не поздно стать рок-звездой!)"
      ],
      key: "child_age",
      condition: {
        key: "learner",
        value: "Мой ребенок. Надеюсь, у него получится лучше, чем у меня"
      }
    },
    {
      question: "Какая гитара заставляет твое сердце биться чаще?",
      answers: [
        "Акустическая (Для душевных посиделок у костра)",
        "Электрогитара (Потому что соседи должны знать, что ты существуешь)",
        "Классическая (Для тех, кто хочет выглядеть умным)",
        "Бас (Потому что кто-то же должен держать ритм)"
      ],
      key: "guitar_type"
    },
    {
      question: "Признавайся, уже пытался сыграть Stairway to Heaven?",
      answers: [
        "Полный новичок (Еще не знаю, с какой стороны держать гитару)",
        "Знаю пару аккордов (Уже могу сыграть начало Wonderwall)",
        "Средний уровень (Семь Nation Army уже не пугает)",
        "Продвинутый (Могу сыграть все песни Beatles... ну, почти все)"
      ],
      key: "experience"
    },
    {
      question: "Какой стиль музыки заставляет тебя хвататься за гитару?",
      answers: [
        "Рок (Потому что кожаные штаны и бандана - это стильно)",
        "Блюз (Потому что жизнь слишком сложна для мажорных аккордов)",
        "Фолк (Потому что природа зовет... играть на гитаре)",
        "Фламенко (Потому что хочу впечатлить своих друзей из Испании)",
        "Все понемногу (Я музыкальный космополит)"
      ],
      key: "music_style"
    },
    {
      question: "Учитывая твою страсть к {music_style}, что бы ты хотел освоить в первую очередь?",
      answers: [
        "Базовые аккорды (Чтобы наконец-то аккомпанировать себе в душе)",
        "Соло (Чтобы все думали, что я знаю, что делаю)",
        "Фингерстайл (Потому что это выглядит очень круто на видео)",
        "Писать песни (Кто-то же должен написать новый хит)"
      ],
      key: "learning_focus",
      dynamic_answers: {
        "Рок (Потому что кожаные штаны и бандана - это стильно)": [
          "Мощные рифы (Чтобы сотрясать стены)",
          "Запил века (Чтобы все упали в обморок от восторга)"
        ],
        "Блюз (Потому что жизнь слишком сложна для мажорных аккордов)": [
          "Блюзовые лики (Чтобы даже кактус заплакал)",
          "Слайд-гитара (Потому что обычная игра уже слишком проста)"
        ],
        "Фолк (Потому что природа зовет... играть на гитаре)": [
          "Фингерпикинг (Чтобы пальцы жили своей жизнью)",
          "Открытые настройки (Потому что стандартный строй - это скучно)"
        ],
        "Фламенко (Потому что хочу впечатлить своих друзей из Испании)": [
          "Расгеадо (Чтобы руки горели, а зрители аплодировали)",
          "Тремоло (Потому что одна нота - это слишком просто)"
        ]
      }
    },
    {
      question: "Зачем тебе эта шестиструнная авантюра?",
      answers: [
        "Просто для удовольствия (Жизнь слишком коротка, чтобы не играть на гитаре)",
        "Хочу выступать (Мечтаю увидеть свое имя на афишах, пусть даже маленькими буквами)",
        "Писать песни (Мир еще не слышал моих гениальных текстов)",
        "Стать звездой (Почему бы и нет? Мама говорит, что я особенный)"
      ],
      key: "goal",
      dynamic_answers: {
        "Я сам! Уже готов рвать струны и сердца!": [
          "Покорить YouTube (Стать следующим гитарным героем интернета)",
          "Собрать свою группу (Потому что одному уже не так весело шуметь)"
        ],
        "Мой ребенок. Надеюсь, у него получится лучше, чем у меня": [
          "Развить музыкальный вкус (И, может быть, перестанет слушать эту современную музыку)",
          "Научиться концентрации (Потому что с уроками это не сработало)"
        ]
      }
    },
    {
      question: "Учитывая твою цель {goal}, сколько времени ты готов мозолить пальцы каждую неделю?",
      answers: [
        "1-2 часа (Чтобы соседи не успели выучить все мои песни)",
        "3-5 часов (Достаточно, чтобы впечатлить друзей, но не превратиться в отшельника)",
        "6-10 часов (Серьезные намерения! Надеюсь, твоя семья готова к постоянному фоновому шуму)",
        "Больше 10 часов (Ты уверен, что не хочешь сразу стать преподавателем?)"
      ],
      key: "practice_time"
    },
    {
      question: "Готов погрузиться в дебри музыкальной теории или предпочитаешь метод 'тыка и молитвы'?",
      answers: [
        "Давайте все эти ноты и интервалы! (Я из тех чудаков, кто читает инструкции к технике)",
        "Немного теории не повредит (Но не перегружайте мой мозг, ему и так нелегко)",
        "Только практика! (Кто нуждается в теории, когда есть YouTube туториалы?)"
      ],
      key: "theory_interest"
    },
    {
      question: "Что заставляет тебя продолжать играть, даже когда пальцы просят пощады?",
      answers: [
        "Мечта о славе (Однажды мое соло услышат все!)",
        "Любовь к музыке (Даже если я единственный фанат своего творчества)",
        "Желание произвести впечатление (Научусь играть Wonderwall и буду звездой вечеринок)",
        "Это отличный способ медитации (Когда играешь, забываешь обо всем... включая технику)"
      ],
      key: "motivation",
      dynamic_answers: {
        "Мой ребенок. Надеюсь, у него получится лучше, чем у меня": [
          "Развитие дисциплины (Потому что с домашними заданиями не сработало)",
          "Чтобы было чем похвастаться перед другими родителями (Да, я не стыжусь этого!)"
        ]
      }
    },
    {
      question: "Учитывая твой уровень {experience} и любовь к {music_style}, готов ли ты устроить гитарное шоу на публике?",
      answers: [
        "Конечно! Когда первый концерт? (Надеюсь, не завтра)",
        "Может быть, но сначала научусь перестраивать гитару без помощи приложения",
        "Нет, я скромный виртуоз. Буду играть для себя и несчастных соседей",
        "А можно для начала выступить перед моими котами?"
      ],
      key: "performance_interest"
    }
  ],
  'Пианино': [
    {
      question: "Кто у нас тут решил стать новым Моцартом (или Элтоном Джоном, мы не осуждаем)?",
      answers: [
        "Я сам! Мои пальцы готовы к марафону по клавишам",
        "Мой ребенок. Надеюсь, это поможет ему перестать стучать по всем поверхностям дома"
      ],
      key: "learner"
    },
    {
      question: "А сколько лет нашему будущему маэстро?",
      answers: [
        "4-6 лет (Самое время научиться чему-то кроме 'собачьего вальса')",
        "7-9 лет (Готов покорить школьный музыкальный конкурс и сердце учительницы музыки)",
        "10-12 лет (Пора задуматься о карьере в филармонии... или в рок-группе)",
        "13+ (Никогда не поздно стать классическим... или не очень... музыкантом!)"
      ],
      key: "child_age",
      condition: {
        key: "learner",
        value: "Мой ребенок. Надеюсь, это поможет ему перестать стучать по всем поверхностям дома"
      }
    },
    {
      question: "Признавайся, уже пытался сыграть 'К Элизе' одним пальцем?",
      answers: [
        "Абсолютный новичок (Еще не знаю, почему одни клавиши черные, а другие белые)",
        "Немного играл (Могу сыграть 'Собачий вальс' и половину 'В траве сидел кузнечик')",
        "Средний уровень (Друзья уже просят сыграть что-нибудь на дне рождения)",
        "Продвинутый (Соседи интересуются, не даю ли я частные концерты)"
      ],
      key: "experience"
    },
    {
      question: "Какая музыка заставляет твои пальцы зудеть от желания коснуться клавиш?",
      answers: [
        "Классика (Потому что я тайно мечтаю носить парик и камзол)",
        "Джаз (Потому что жизнь слишком коротка для простых аккордов)",
        "Поп (Потому что хочу быть как Леди Гага... ну, в музыкальном плане)",
        "Рок (Да, на пианино тоже можно рок! И без волос до пояса)",
        "Все понемногу (Я музыкальный космополит в черно-белых тонах)"
      ],
      key: "music_style"
    },
    {
      question: "Учитывая твою страсть к {music_style}, что бы ты хотел освоить в первую очередь?",
      answers: [
        "Правильную посадку (Чтобы не выглядеть как горбун из Нотр-Дама за инструментом)",
        "Чтение нот (Потому что эти черные точки должны что-то значить)",
        "Игру аккордами (Чтобы аккомпанировать себе, пока пою в душе)",
        "Беглость пальцев (Хочу, чтобы мои руки двигались быстрее, чем мысли)"
      ],
      key: "learning_focus",
      dynamic_answers: {
        "Классика (Потому что я тайно мечтаю носить парик и камзол)": [
          "Исполнение сонат (Чтобы произвести впечатление на бабушку)",
          "Игра фортепианных концертов (Потому что соло - это слишком просто)"
        ],
        "Джаз (Потому что жизнь слишком коротка для простых аккордов)": [
          "Импровизация (Потому что ошибок не существует, только новые открытия)",
          "Свинг (Чтобы заставить даже кактус танцевать)"
        ],
        "Поп (Потому что хочу быть как Леди Гага... ну, в музыкальном плане)": [
          "Игра по цифровкам (Потому что кто вообще читает ноты в поп-музыке?)",
          "Работа с синтезатором (Чтобы быть диджеем на районе)"
        ],
        "Рок (Да, на пианино тоже можно рок! И без волос до пояса)": [
          "Мощные рифы на пианино (Да, это возможно!)",
          "Соло, от которых плавятся клавиши (И пальцы тоже)"
        ]
      }
    },
    {
      question: "Зачем тебе эта черно-белая авантюра?",
      answers: [
        "Для души (И чтобы было чем занять руки во время просмотра сериалов)",
        "Хочу выступать (Мечтаю о Карнеги-холле... или хотя бы о школьном концерте)",
        "Для развития мозга (Говорят, музыканты и шахматисты не стареют)",
        "Стать композитором (Бетховен, подвинься!)"
      ],
      key: "goal",
      dynamic_answers: {
        "Я сам! Мои пальцы готовы к марафону по клавишам": [
          "Произвести впечатление на свидании (Романтика уровня Шопен)",
          "Открыть в себе скрытый талант (Вдруг я реинкарнация Листа?)"
        ],
        "Мой ребенок. Надеюсь, это поможет ему перестать стучать по всем поверхностям дома": [
          "Развить усидчивость (Потому что с уроками это не сработало)",
          "Подготовка к музыкальной школе (Потому что обычной школы мало для полного счастья)"
        ]
      }
    },
    {
      question: "Учитывая твою цель {goal}, сколько времени ты готов гладить клавиши каждую неделю?",
      answers: [
        "1-2 часа (Чтобы соседи не успели выучить весь мой репертуар)",
        "3-5 часов (Достаточно, чтобы впечатлить друзей, но не превратиться в пианино)",
        "6-10 часов (Серьезные намерения! Готовься к мозолям на пальцах)",
        "Больше 10 часов (Ты уверен, что не хочешь сразу стать концертирующим пианистом?)"
      ],
      key: "practice_time"
    },
    {
      question: "Готов погрузиться в дебри музыкальной теории или предпочитаешь метод 'тыка и надежды'?",
      answers: [
        "Обожаю теорию! (Я из тех, кто читает учебники по сольфеджио на ночь)",
        "Немного теории не повредит (Но давайте без фанатизма)",
        "Только практика! (Кто нуждается в теории, когда есть YouTube?)"
      ],
      key: "theory_interest"
    },
    {
      question: "Что заставляет тебя продолжать играть, даже когда пальцы умоляют о пощаде?",
      answers: [
        "Мечта о славе (Однажды мои концерты будут транслировать из космоса)",
        "Любовь к музыке (Даже если я единственный слушатель)",
        "Желание впечатлить (Научусь играть мелодию из 'Титаника' и стану звездой вечеринок)",
        "Это отличная альтернатива спортзалу (Кто сказал, что пианисты не атлеты?)"
      ],
      key: "motivation",
      dynamic_answers: {
        "Мой ребенок. Надеюсь, это поможет ему перестать стучать по всем поверхностям дома": [
          "Развитие дисциплины (Потому что с домашними заданиями не получилось)",
          "Чтобы было чем похвастаться на родительских собраниях (Да, я не стыжусь этого!)"
        ]
      }
    },
    {
      question: "Учитывая твой уровень {experience} и любовь к {music_style}, готов ли ты устроить фортепианное шоу на публике?",
      answers: [
        "Конечно! Где записаться на ближайший концерт Шопена?",
        "Может быть, но сначала научусь играть, не глядя на клавиши",
        "Нет, я скромный виртуоз. Буду играть для себя и воображаемой публики",
        "А можно для начала выступить перед моими домашними растениями? Они менее критичны"
      ],
      key: "performance_interest"
    }
  ]
};