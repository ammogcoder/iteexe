/*
 * FCKeditor - The text editor for internet
 * Copyright (C) 2003-2004 Frederico Caldeira Knabben
 * 
 * Licensed under the terms of the GNU Lesser General Public License:
 * 		http://www.opensource.org/licenses/lgpl-license.php
 * 
 * For further information visit:
 * 		http://www.fckeditor.net/
 * 
 * File Name: ru.js
 * 	Russian language file.
 * 
 * Version:  2.0 RC2
 * Modified: 2004-12-20 01:21:21
 * 
 * File Authors:
 * 		Andrey Grebnev (andrey.grebnev@blandware.com)
 */

var FCKLang =
{
// Language direction : "ltr" (left to right) or "rtl" (right to left).
Dir					: "ltr",
                                                    
ToolbarCollapse		: "Свернуть панель инструментов",
ToolbarExpand		: "Развернуть панель инструментов",

// Toolbar Items and Context Menu
Save				: "Сохранить",
NewPage				: "Новая страница",
Preview				: "Предварительный просмотр",
Cut					: "Вырезать",
Copy				: "Копировать",
Paste				: "Вставить",
PasteText			: "Вставить только текст",
PasteWord			: "Вставить из Word",
Print				: "Печать",
SelectAll			: "Выделить все",
RemoveFormat		: "Убрать форматирование",
InsertLinkLbl		: "Ссылка",
InsertLink			: "Вставить/Редактировать ссылку",
RemoveLink			: "Убрать ссылку",
InsertImageLbl		: "Изображение",
InsertImage			: "Вставить/Редактировать изображение",
InsertTableLbl		: "Таблица",
InsertTable			: "Вставить/Редактировать таблицу",
InsertLineLbl		: "Линия",
InsertLine			: "Вставить горизонтальную линию",
InsertSpecialCharLbl: "Специальный символ",
InsertSpecialChar	: "Вставить специальный символ",
InsertSmileyLbl		: "Смайлик",
InsertSmiley		: "Вставить смайлик",
About				: "О FCKeditor",
Bold				: "Жирный",
Italic				: "Курсив",
Underline			: "Подчеркнутый",
StrikeThrough		: "Зачеркнутый",
Subscript			: "Подстрочный индекс",
Superscript			: "Надстрочный индекс",
LeftJustify			: "По левому краю",
CenterJustify		: "По центру",
RightJustify		: "По правому краю",
BlockJustify		: "По ширине",
DecreaseIndent		: "Уменьшить отступ",
IncreaseIndent		: "Увеличить отступ",
Undo				: "Отменить",
Redo				: "Повторить",
NumberedListLbl		: "Нумерованный список",
NumberedList		: "Вставить/Удалить нумерованный список",
BulletedListLbl		: "Маркированный список",
BulletedList		: "Вставить/Удалить маркированный список",
ShowTableBorders	: "Показать бордюры таблицы",
ShowDetails			: "Показать детали",
Style				: "Стиль",
FontFormat			: "Форматирование",
Font				: "Шрифт",
FontSize			: "Размер",
TextColor			: "Цвет текста",
BGColor				: "Цвет фона",
Source				: "Источник",
Find				: "Найти",
Replace				: "Заменить",

// Context Menu
EditLink			: "Вставить ссылку",
InsertRow			: "Вставить строку",
DeleteRows			: "Удалить строки",
InsertColumn		: "Вставить колонку",
DeleteColumns		: "Удалить колонки",
InsertCell			: "Вставить ячейку",
DeleteCells			: "Удалить ячейки",
MergeCells			: "Соединить ячейки",
SplitCell			: "Разбить ячейку",
CellProperties		: "Свойства ячейки",
TableProperties		: "Свойства таблицы",
ImageProperties		: "Свойства изображения",

FontFormats			: "Нормальный;Форматированный;Адрес;Заголовок 1;Заголовок 2;Заголовок 3;Заголовок 4;Заголовок 5;Заголовок 6",

// Alerts and Messages
ProcessingXHTML		: "Обработка XHTML. Пожалуйста подождите...",
Done				: "Сделано",
PasteWordConfirm	: "Текст, который вы хотите вставить, похож на копируемый из Word. Вы хотите очистить его перед вставкой?",
NotCompatiblePaste	: "Эта команда доступна для Internet Explorer версии 5.5 или выше. Вы хотите вставить без очистки?",
UnknownToolbarItem	: "Не известный элемент панели инструментов \"%1\"",
UnknownCommand		: "Не известное имя команды \"%1\"",
NotImplemented		: "Команда не реализована",
UnknownToolbarSet	: "Панель инструментов \"%1\" не существует",

// Dialogs
DlgBtnOK			: "ОК",
DlgBtnCancel		: "Отмена",
DlgBtnClose			: "Закрыть",
DlgAdvancedTag		: "Расширенный",

// General Dialogs Labels
DlgGenNotSet		: "&lt;не определено&gt;",
DlgGenId			: "Идентификатор",
DlgGenLangDir		: "Направление языка",
DlgGenLangDirLtr	: "Слева на право (LTR)",
DlgGenLangDirRtl	: "Справа на лево (RTL)",
DlgGenLangCode		: "Язык",
DlgGenAccessKey		: "Горячая клавиша",
DlgGenName			: "Имя",
DlgGenTabIndex		: "Последовательность перехода",
DlgGenLongDescr		: "Длинное описание URL",
DlgGenClass			: "Класс CSS",
DlgGenTitle			: "Заголовок",
DlgGenContType		: "Тип содержимого",
DlgGenLinkCharset	: "Кодировка",
DlgGenStyle			: "Стиль CSS",

// Image Dialog
DlgImgTitle			: "Свойства изображения",
DlgImgInfoTab		: "Информация о изображении",
DlgImgBtnUpload		: "Послать на сервер",
DlgImgURL			: "URL",
DlgImgUpload		: "Закачать",
DlgImgBtnBrowse		: "Просмотреть на сервере",
DlgImgAlt			: "Альтернативный текст",
DlgImgWidth			: "Ширина",
DlgImgHeight		: "Высота",
DlgImgLockRatio		: "Сохранять пропорции",
DlgBtnResetSize		: "Сбросить размер",
DlgImgBorder		: "Бордюр",
DlgImgHSpace		: "Горизонтальный отступ",
DlgImgVSpace		: "Вертикальный отступ",
DlgImgAlign			: "Выравнивание",
DlgImgAlignLeft		: "По левому краю",
DlgImgAlignAbsBottom: "Абс поверху",
DlgImgAlignAbsMiddle: "Абс посередине",
DlgImgAlignBaseline	: "По базовой линии",
DlgImgAlignBottom	: "Понизу",
DlgImgAlignMiddle	: "Посередине",
DlgImgAlignRight	: "По правому краю",
DlgImgAlignTextTop	: "Текст наверху",
DlgImgAlignTop		: "По верху",
DlgImgPreview		: "Предварительный просмотр",
DlgImgMsgWrongExt	: "Сожалеем, но только следующие типы файлов разрешены к закачке:\n\n" + FCKConfig.ImageUploadAllowedExtensions + "\n\nОперация отменена.",
DlgImgAlertSelect	: "Пожалуйста выберете изображение для закачки.",
DlgImgAlertUrl		: "Пожалуйста введите URL изображения",

// Link Dialog
DlgLnkWindowTitle	: "Ссылка",
DlgLnkInfoTab		: "Информация ссылки",
DlgLnkTargetTab		: "Цель",

DlgLnkType			: "Тип ссылки",
DlgLnkTypeURL		: "URL",
DlgLnkTypeAnchor	: "Якорь на эту страницу",
DlgLnkTypeEMail		: "Эл. почта",
DlgLnkProto			: "Протокол",
DlgLnkProtoOther	: "&lt;другое&gt;",
DlgLnkURL			: "URL",
DlgLnkBtnBrowse		: "Просмотреть на сервере",
DlgLnkAnchorSel		: "Выберите якорь",
DlgLnkAnchorByName	: "По имени якоря",
DlgLnkAnchorById	: "По идентификатору элемента",
DlgLnkNoAnchors		: "&lt;Нет якорей доступных в этом документе&gt;",
DlgLnkEMail			: "Адрес эл. почты",
DlgLnkEMailSubject	: "Заголовок сообщения",
DlgLnkEMailBody		: "Тело сообщения",
DlgLnkUpload		: "Закачать",
DlgLnkBtnUpload		: "Послать на сервер",

DlgLnkTarget		: "Цель",
DlgLnkTargetFrame	: "&lt;фрейм&gt;",
DlgLnkTargetPopup	: "&lt;всплывающее окно&gt;",
DlgLnkTargetBlank	: "Новое окно (_blank)",
DlgLnkTargetParent	: "Родительское окно (_parent)",
DlgLnkTargetSelf	: "Тоже окно (_self)",
DlgLnkTargetTop		: "Самое верхнее окно (_top)",
DlgLnkTargetFrame	: "Имя целевого фрейма",
DlgLnkPopWinName	: "Имя всплывающего окна",
DlgLnkPopWinFeat	: "Свойства всплывающего окна",
DlgLnkPopResize		: "Изменяющееся в размерах",
DlgLnkPopLocation	: "Панель локации",
DlgLnkPopMenu		: "Панель меню",
DlgLnkPopScroll		: "Полосы прокрутки",
DlgLnkPopStatus		: "Строка состояния",
DlgLnkPopToolbar	: "Панель инструментов",
DlgLnkPopFullScrn	: "Полный экран (IE)",
DlgLnkPopDependent	: "Зависимый (Netscape)",
DlgLnkPopWidth		: "Ширина",
DlgLnkPopHeight		: "Высота",
DlgLnkPopLeft		: "Позиция слева",
DlgLnkPopTop		: "Позиция сверху",

DlgLnkMsgWrongExtA	: "Сожалеем, только следующие типы файлов разрешены для закачки:\n\n" + FCKConfig.LinkUploadAllowedExtensions + "\n\nОперация отменена.",
DlgLnkMsgWrongExtD	: "Сожалеем, следующие типы файлов не разрешены для закачки:\n\n" + FCKConfig.LinkUploadDeniedExtensions + "\n\nОперация отменена.",

DlnLnkMsgNoUrl		: "Пожалуйста введите URL ссылки",
DlnLnkMsgNoEMail	: "Пожалуйста введите адрес эл. почты",
DlnLnkMsgNoAnchor	: "Пожалуйста выберете якорь",

// Color Dialog
DlgColorTitle		: "Выберите цвет",
DlgColorBtnClear	: "Очистить",
DlgColorHighlight	: "Подсвеченный",
DlgColorSelected	: "Выбранный",

// Smiley Dialog
DlgSmileyTitle		: "Вставить смайлик",

// Special Character Dialog
DlgSpecialCharTitle	: "Выберите специальный символ",

// Table Dialog
DlgTableTitle		: "Свойства таблицы",
DlgTableRows		: "Строки",
DlgTableColumns		: "Колонки",
DlgTableBorder		: "Размер бордюра",
DlgTableAlign		: "Выравнивание",
DlgTableAlignNotSet	: "<Не уст.>",
DlgTableAlignLeft	: "Слева",
DlgTableAlignCenter	: "По центру",
DlgTableAlignRight	: "Справа",
DlgTableWidth		: "Ширина",
DlgTableWidthPx		: "пикселей",
DlgTableWidthPc		: "процентов",
DlgTableHeight		: "Высота",
DlgTableCellSpace	: "Промежуток (spacing)",
DlgTableCellPad		: "Отступ (padding)",
DlgTableCaption		: "Заголовок",

// Table Cell Dialog
DlgCellTitle		: "Свойства ячейки",
DlgCellWidth		: "ширина",
DlgCellWidthPx		: "пикселей",
DlgCellWidthPc		: "процентов",
DlgCellHeight		: "Высота",
DlgCellWordWrap		: "Заворачивание текста",
DlgCellWordWrapNotSet	: "<Не уст.>",
DlgCellWordWrapYes	: "Да",
DlgCellWordWrapNo	: "Нет",
DlgCellHorAlign		: "Горизонтальное выравнивание",
DlgCellHorAlignNotSet	: "<Не уст.>",
DlgCellHorAlignLeft	: "Слева",
DlgCellHorAlignCenter	: "По центру",
DlgCellHorAlignRight: "Справа",
DlgCellVerAlign		: "Вертикальное выравнивание",
DlgCellVerAlignNotSet	: "<Не уст.>",
DlgCellVerAlignTop	: "Сверху",
DlgCellVerAlignMiddle	: "Посередине",
DlgCellVerAlignBottom	: "Снизу",
DlgCellVerAlignBaseline	: "По базовой линии",
DlgCellRowSpan		: "Диапазон строк (span)",
DlgCellCollSpan		: "Диапазон колонок (span)",
DlgCellBackColor	: "Цвет фона",
DlgCellBorderColor	: "Цвет бордюра",
DlgCellBtnSelect	: "Выберите...",

// Find Dialog
DlgFindTitle		: "Найти",
DlgFindFindBtn		: "Найти",
DlgFindNotFoundMsg	: "Указанный текст не найден.",

// Replace Dialog
DlgReplaceTitle			: "Заменить",
DlgReplaceFindLbl		: "Найти:",
DlgReplaceReplaceLbl	: "Заменить на:",
DlgReplaceCaseChk		: "Учитывать регистр",
DlgReplaceReplaceBtn	: "Заменить",
DlgReplaceReplAllBtn	: "Заменить все",
DlgReplaceWordChk		: "Совпадение целых слов",

// Paste Operations / Dialog
PasteErrorPaste	: "Настройки безопасности вашего браузера не позволяют редактору автоматически выполнять операции вставки. Пожалуйста используйте клавиатуру для этого (Ctrl+V).",
PasteErrorCut	: "Настройки безопасности вашего браузера не позволяют редактору автоматически выполнять операции вырезания. Пожалуйста используйте клавиатуру для этого (Ctrl+X).",
PasteErrorCopy	: "Настройки безопасности вашего браузера не позволяют редактору автоматически выполнять операции копирования. Пожалуйста используйте клавиатуру для этого (Ctrl+C).",

PasteAsText		: "Вставить только текст",
PasteFromWord	: "Вставить из Word",

DlgPasteMsg		: "Редактор не может автоматически выполнить операцию вставки, по причине <STRONG>настроек безопасности</STRONG> вашего браузера.<BR>Пожалуйста вставьте текст в следующее поле ввода, используя клавиатуру (<STRONG>Ctrl+V</STRONG>) и нажмите <STRONG>ОК</STRONG>.",

// Color Picker
ColorAutomatic	: "Автоматический",
ColorMoreColors	: "Цвета...",

// About Dialog
DlgAboutVersion	: "Версия",
DlgAboutLicense	: "Лицензировано в соответствии с условиями GNU Lesser General Public License",
DlgAboutInfo	: "Для большей информации, посетите"
}