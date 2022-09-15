1. history
2. rm file-name
3. rm -r dir-name
4. find 
5. ps aux -O cpu

1. wget/ curl -O <url> (do not inculde "<>", O has to be in captial)
2. grep -r "word" file2 file2 file3


1. CTRL + "R" / up button
2. Command W (ctrl D) / exit
3. Date
4. which command-name whereis
5. echo / seq / jot

1. pbcopy < test.txt(mac)
2. pbpaste > test.txt
3. sed -i 's/old-text/new-text/g' input.txt
The s is the substitute command of sed for find and replace
It tells sed to find all occurrences of ‘old-text’ and replace with ‘new-text’ in a file named input.txt

nano memoir.txt + add 3 lines of text
nano agenda.txt + add 3 lines of text
nano calendar.txt + add 3 lines of text

cat memoir.txt agenda.txt calendar.txt>> complication.txt

mv memoir.txt gertrude_styles
mv agenda.txt gertrude_style/bianca_grave/lola_tul
mv calendar.txt gertrude_styles/jim_styles/karen_styles_grim/  (mv file has to be in the same dir to work)

cp gertrude_styles/memoir.txt gertrude_styles/bianca_grave/lola_tul/herve_tul
cp - r gertrude_styles/bianca_grave/herve_tul


