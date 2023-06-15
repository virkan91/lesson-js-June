# Table of Contents
### 1.**SCOPE**   
### 2.**HOISTING**
### 3.**Recursion**
### 4.**Closure**
_________________

## Понятие Scope в JavaScript 

Область видимости — это часть программы, в которой мы можем обратиться к переменной, функции или объекту. Этой частью может быть функция, блок или вся программа в целом — то есть мы всегда находимся как минимум в одной области видимости. Области видимости можно представить как коробки, в которые мы кладём переменные.

Минтакай муаян (област видимости) - минтакай муаяне ки  дар он кадом пременахо (veriable) ва кадом функцияхо (function) кор кунанд!


### JavaScript имеет следующие типы областей видимости: Нимудхои област видимости ! Чанд намуд хастанд?

* Глобальная область видимости или **Global Scope**.
* Область видимости функции **Function Scope**
* Область видимости блока **Block Scope**
* **Module scope**

### 1.Глобальная область видимости или Global Scope
В JavaScript есть только одна **глобальная область**. Область за пределами всех функций считается глобальной областью, и переменные, определенные в глобальной области, могут быть доступны и изменены в любых других областях.

![Tux, the Linux mascot](lesson-2/img/gl-scote.png)

### 2. Function Scope (Область видимости функции)
Переменные объявленные в функции не могут быть доступными где-нибудь вне этой функции, поэтому переменные (которые нужны именно для функции) объявляют только в scope функции

Коида: Област видимости функции -  хама вахт лакальниян ва глабалнира хонда наметонан , глабальная боша  лаклнира мебина ва мотонаш хондан!
_________________

## Поднятие или hoisting в JavaScript

![Tux, the Linux mascot](lesson-2/img/js-hostint.jpg)

Что такое "поднятие" и как оно работает в JavaScript.

1. Поднятие (hoisting).
2. Поднятие функций.
3. Поднятие const, let и var.
    - Ключевое слово var
    - Ключевое слово const/let

## Поднятие (hoisting)

Поднятие предполагает, что объявления переменных **var** и функций **function** физически перемещаются в начало кода, но, на самом деле это не так.

По сути, когда Javascript компилирует весь код, все объявления переменных, использующие **var**, поднимаются/hoisted в верхнюю часть их функциональной/локальной области видимости (если объявляется внутри функции) или в глобальную область видимости (если объявляется вне функции) независимо от того, где была сделана фактическая декларация.

Объявления переменных и функций помещаются в память на этапе компиляции, но они остаются именно там, где мы ввели их в свой код.

Итак, под капотом происходит следующее: на этапе создания, движок JavaScript просматривает код и, как только он видит ключевое слово **var** или ключевое слово **function**, он выделяет некоторую память для них.

## Поднятие const, let и var
**var** - это традиционный способ объявления переменных в JavaScript.

ES6 (ECMAScript 6) представил два новых способа объявления переменных: **const** и **let**, и, как правило, они рекомендуются во избежание неожиданных осложнений при подъеме.

### Ключевое слово var

*  **var** имеет область действия функции;
* объявления var поднимаются, но не инициализируются.

![Tux, the Linux mascot](lesson-2/img/var.png)

Приведенный выше код, из-за поднятия эквивалентен приведенному коду ниже.

![Tux, the Linux mascot](lesson-2/img/var-2.png)

## Ключевые слова const / let
* **const** и let имеют область видимости блока.

На самом деле объявления **var**, **let**, **const**, **function** и **class** поднимаются; но, мы должны помнить, что концепция поднятия не является буквальным процессом (т. е. сами объявления не перемещаются в начало файла - это просто процесс компилятора JavaScript, который сначала читает их, чтобы освободить для них место в памяти).

Разница между объявлениями **var / function** и объявлениями **let / const / class** заключается в инициализации. Первые инициализируются с неопределенным значением undefined. Однако, вторые, лексически объявленные переменные, остаются не инициализированными. Это означает, что ReferenceError выбрасывается при попытке доступа к ним. Они будут инициализированы только после того, как операторы **let / const / class** будут определены. Всё что до, называется временной мертвой зоной.

Временная мертвая зона - это не синтаксическое местоположение, а время между созданием переменной (области) и инициализацией. Ссылка на переменную в коде над объявлением не является ошибкой, если этот код не выполняется (например, тело функции или просто мертвый код), но ошибка будет выдана, если мы запросим доступ к переменной до её инициализации.

Разница между объявлениями **var**, **let** и **const** заключается в их инициализации.

Экземпляры **var** и **let** могут быть инициализированы без значения, в то время как const выдаст ошибку ReferenceError, если ты попытаешься объявить её без одновременного присвоения ей значения. Так что const myName = 'Alex' будет работать, но const myName; myName = 'Alex'; не будет. С помощью var и let ты можешь попробовать использовать значение var до того, как оно будет присвоено, и оно вернет undefined. Однако, если ты сделаешь то же самое с let - получишь ReferenceError.

![Tux, the Linux mascot](lesson-2/img/var-2.png)

Также, если ты создашь **var** на верхнем уровне (глобальный уровень), создастся свойство для глобального объекта; в случае с браузером - это объект **window**. Поэтому на создание **var myName = 'Alex'**; можно ссылаться также путем вызова window.myName.

Однако, если ты напишешь **let newName = 'Alex'**; это не будет доступно в глобальном объекте **window** - следовательно, ты не сможешь использовать **window.newName** в качестве ссылки на **'Alex'** ,

К объявлениям, сделанным с помощью var, можно получить доступ за пределами их первоначальной области видимости, тогда как к объявлениям, сделанным с помощью **let** и **const**, нельзя.

![Tux, the Linux mascot](lesson-2/img/let-const.png)
_________________

## Введение в замыкание. Closure

![Tux, the Linux mascot](lesson-2/img/js-corusel.jpg)

**Что такое замыкание**

* Замыкание
* Инкапсуляция
* Эффективное использование памяти.

### Замыкание

**Замыкание** обеспечивает доступ к переменным в своей **лексической области**; включая переменные родителей, которые были удалены из стека вызовов, путём определения, какие именно переменные понадобятся дочерним функциям, путём сохранения их в памяти.

Другими словами, замыкание даёт нам доступ к области видимости внешней функции из внутренней функции. В JavaScript замыкания создаются каждый раз, когда во время создания функции, внутри неё создаётся ещё одна функция.

### Инкапсуляция

Инкапсуляция позволяет нам скрывать/показывать свойства функций и объектов.

Замыкания обычно используются для обеспечения конфиденциальности данных объектов. Конфиденциальность данных - это важное свойство, которое помогает нам программировать интерфейс, а не реализацию. Дання концепция важна тем, что помогает нам создавать более надежное программное обеспечение.

В JavaScript, замыкания являются основным механизмом, обеспечивающим конфиденциальность данных. Когда мы используем замыкания для конфиденциальности данных, вложенные переменные находятся только в области действия, внутри содержащей (внешней) функции. Мы не можем получить данные из внешней области, кроме как через привилегированные функции. В JavaScript любая функция, определенная в области замыкания, является привилегированной.

**Замыкания** подобны объектам в том смысле, что они представляют собой механизм для хранения состояния:

Например, в приведенном ниже примере, мы не хотим показывать функцию **launch** для её вызова, а также не даём доступ к **timeWithoutDesctruction**:

![Tux, the Linux mascot](lesson-2/img/zm.png)

Таким образом, мы скрываем данные объекта, которые не должны быть напрямую доступны. Вместо прямого доступа к данным нужно вызывать методы.
_________________

# Рекурсия -  recursion

![Tux, the Linux mascot](lesson-2/img/recursiv-js.png)

Рекурсия (recursion) — это поведение функции, при котором она вызывает сама себя. Такие функции называются рекурсивными. В отличие от цикла, они не просто повторяются несколько раз, а работают «внутри» друг друга.

### Кто пользуется рекурсией и зачем она нужна
Рекурсия время от времени нужна программистам, чтобы решать различные задачи. Есть задания, которые проще и интуитивно понятнее решаются с ее помощью, а есть те, для которых есть более оптимальные алгоритмы.

Обычно рекурсию применяют при расчетах, которые подразумевают использование результата одного шага для подсчитывания другого. Например, расчет фрактала и его рисование. Зачастую подобные задачи можно решить и без рекурсии, но ее использование делает код проще, короче и быстрее, чем альтернативные варианты. Правда, рекурсия может слишком нагружать компьютер, поэтому такие решения применяют не всегда.

Рекурсию можно встретить и в других отраслях: физике, биологии, лингвистике и даже архитектуре. Например, фрактальные формы вроде листа папоротника или снежинки — рекурсивные. Вложенные предложения — тоже. А самый наглядный вид рекурсии — два поставленных друг напротив друга зеркала.

Программисты пользуются рекурсией и ради забавы. Например, известная аббревиатура GNU расшифровывается как GNU is Not Unix – первая буква скрывает под собой ту же аббревиатуру. Это тоже рекурсия.

### Отличия рекурсии от цикла
На интуитивном уровне рекурсивный вызов легко перепутать с циклом. И то, и другое понятие подразумевает, что функция выполняется несколько раз. Но есть принципиальное различие:

в цикле новые функции не вызываются внутри вызванных ранее;
рекурсия же — это функция, вызывающая сама себя с другими аргументами.
Простыми словами: инструкция с пунктом «Вернись к пункту 1» — это цикл, инструкция с пунктом «Прочитай инструкцию заново» — рекурсия.

Но тем не менее циклами часто заменяют рекурсию, например в ситуациях, где рекурсивные алгоритмы оказываются слишком ресурсоемкими. Правда, для использования циклов в качестве замены рекурсии понадобятся дополнительные ухищрения.

### Прерывание рекурсии
Если рекурсивной функции не задать условия для выхода, она будет работать бесконечно, пока огромное количество ее экземпляров не «съест» всю оперативную память устройства и не переполнит стек вызовов. Поэтому разработчик должен предусмотреть пути выхода из рекурсивного процесса.

Обычно путь выхода — это какое-то условие, которое проверяется в самом начале выполнения функции. Если оно выполняется, функция вызовет себя снова, если нет — выдаст какое-то значение, отдаст его предыдущему «соседу» и закроется.

Например, если n > 1, то вызвать A(n-1). Иначе вернуть 1. Получается, что когда n станет меньше или равен единице, то A не запустится заново — очередной экземпляр просто вернет единицу. Остальные экземпляры получат нужный себе результат и тоже закроются по каскаду. Этот процесс называется обратным ходом рекурсии. А то, что было до него, — прямым ходом.

Количество открытых в итоге функций называется глубиной рекурсии.

## Два способа мышления

В качестве первого примера напишем функцию **pow(x, n)**, которая возводит x в натуральную **степень n**. Иначе говоря, умножает x на само себя n раз.

    > pow(2, 2) = 4
    
    > pow(2, 3) = 8
    
    > pow(2, 4) = 16

Рассмотрим два способа её реализации.

1. Итеративный способ: цикл **for**:

![Tux, the Linux mascot](lesson-2/img/for.png)

2.Рекурсивный способ: упрощение задачи и вызов функцией самой себя:

![Tux, the Linux mascot](lesson-2/img/pow.png)

Обратите внимание, что рекурсивный вариант отличается принципиально.

Когда функция pow(x, n) вызывается, исполнение делится на две ветви:

![Tux, the Linux mascot](lesson-2/img/wet.png)

1.Если **n == 1**, тогда всё просто. Эта ветвь называется базой рекурсии, потому что сразу же приводит к очевидному результату: **pow(x, 1)** равно x.
2.Мы можем представить **pow(x, n)** в виде: **x * pow(x, n - 1)**. Что в математике записывается как: **xn = x * xn-1**. Эта ветвь – шаг рекурсии: мы сводим задачу к более простому действию (умножение на x) и более простой аналогичной задаче (pow с меньшим n). Последующие шаги упрощают задачу всё больше и больше, пока n не достигает.

Например, рекурсивный вариант вычисления pow(2, 4) состоит из шагов:

    > 1.pow(2, 4) = 2 * pow(2, 3)

    > 2.pow(2, 3) = 2 * pow(2, 2)

    > 3.pow(2, 2) = 2 * pow(2, 1)
    
    > 4.pow(2, 1) = 2

Итак, рекурсию используют, когда вычисление функции можно свести к её более простому вызову, а его – к ещё более простому и так далее, пока значение не станет очевидно.