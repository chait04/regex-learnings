# Regex Learnings

* Basics of Regex (very easy)

Characters	Meaning
^	
Matches the beginning of input. If the multiline flag is set to true, also matches immediately after a line break character. For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".

This character has a different meaning when it appears at the start of a group.

$	
Matches the end of input. If the multiline flag is set to true, also matches immediately before a line break character. For example, /t$/ does not match the "t" in "eater", but does match it in "eat".

\b	
Matches a word boundary. This is the position where a word character is not followed or preceded by another word-character, such as between a letter and a space. Note that a matched word boundary is not included in the match. In other words, the length of a matched word boundary is zero.

Examples:

/\bm/ matches the "m" in "moon".
/oo\b/ does not match the "oo" in "moon", because "oo" is followed by "n" which is a word character.
/oon\b/ matches the "oon" in "moon", because "oon" is the end of the string, thus not followed by a word character.
/\w\b\w/ will never match anything, because a word character can never be followed by both a non-word and a word character.
To match a backspace character ([\b]), see Character Classes.

\B	
Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match. For example, /\Bon/ matches "on" in "at noon", and /ye\B/ matches "ye" in "possibly yesterday".

Note: The ? character may also be used as a quantifier.

Characters	Meaning
x(?=y)	
Lookahead assertion: Matches "x" only if "x" is followed by "y". For example, /Jack(?=Sprat)/ matches "Jack" only if it is followed by "Sprat".
/Jack(?=Sprat|Frost)/ matches "Jack" only if it is followed by "Sprat" or "Frost". However, neither "Sprat" nor "Frost" is part of the match results.

x(?!y)	
Negative lookahead assertion: Matches "x" only if "x" is not followed by "y". For example, /\d+(?!\.)/ matches a number only if it is not followed by a decimal point. /\d+(?!\.)/.exec('3.141') matches "141" but not "3".

(?<=y)x	
Lookbehind assertion: Matches "x" only if "x" is preceded by "y". For example, /(?<=Jack)Sprat/ matches "Sprat" only if it is preceded by "Jack". /(?<=Jack|Tom)Sprat/ matches "Sprat" only if it is preceded by "Jack" or "Tom". However, neither "Jack" nor "Tom" is part of the match results.

(?<!y)x	
Negative lookbehind assertion: Matches "x" only if "x" is not preceded by "y". For example, /(?<!-)\d+/ matches a number only if it is not preceded by a minus sign. /(?<!-)\d+/.exec('3') matches "3". /(?<!-)\d+/.exec('-3')  match is not found because the number is preceded by the minus sign.

Groups and ranges
Characters	Meaning
x|y	
Matches either "x" or "y". For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".

[xyz]
[a-c]	
A character set. Matches any one of the enclosed characters. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character set as a normal character. It is also possible to include a character class in a character set.

For example, [abcd] is the same as [a-d]. They match the "b" in "brisket", and the "c" in "chop".

For example, [abcd-] and [-abcd] match the "b" in "brisket", the "c" in "chop", and the "-" (hyphen) in "non-profit".

For example, [\w-] is the same as [A-Za-z0-9_-]. They both match the "b" in "brisket", the "c" in "chop", and the "n" in "non-profit".

[^xyz]
[^a-c]

A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. You can specify a range of characters by using a hyphen, but if the hyphen appears as the first or last character enclosed in the square brackets it is taken as a literal hyphen to be included in the character set as a normal character. For example, [^abc] is the same as [^a-c]. They initially match "o" in "bacon" and "h" in "chop".

The ^ character may also indicate the beginning of input.

(x)	
Capturing group: Matches x and remembers the match. For example, /(foo)/ matches and remembers "foo" in "foo bar". 

A regular expression may have multiple capturing groups. In results, matches to capturing groups typically in an array whose members are in the same order as the left parentheses in the capturing group. This is usually just the order of the capturing groups themselves. This becomes important when capturing groups are nested. Matches are accessed using the index of the result's elements ([1], ..., [n]) or from the predefined RegExp object's properties ($1, ..., $9).

Capturing groups have a performance penalty. If you don't need the matched substring to be recalled, prefer non-capturing parentheses (see below).

String.match() won't return groups if the /.../g flag is set. However, you can still use String.matchAll() to get all matches.

\n	
Where "n" is a positive integer. A back reference to the last substring matching the n parenthetical in the regular expression (counting left parentheses). For example, /apple(,)\sorange\1/ matches "apple, orange," in "apple, orange, cherry, peach".

\k<Name>	
A back reference to the last substring matching the Named capture group specified by <Name>.

For example, /(?<title>\w+), yes \k<title>/ matches "Sir, yes Sir" in "Do you copy? Sir, yes Sir!".

\k is used literally here to indicate the beginning of a back reference to a Named capture group.

(?<Name>x)	
Named capturing group: Matches "x" and stores it on the groups property of the returned matches under the name specified by <Name>. The angle brackets (< and >) are required for group name.

For example, to extract the United States area code from a phone number, we could use /\((?<area>\d\d\d)\)/. The resulting number would appear under matches.groups.area.

(?:x)	Non-capturing group: Matches "x" but does not remember the match. The matched substring cannot be recalled from the resulting array's elements ([1], ..., [n]) or from the predefined RegExp object's properties ($1, ..., $9).
