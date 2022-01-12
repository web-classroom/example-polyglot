


#include <stdio.h>
#include <string.h>

#ifdef EMSCRIPTEN

#include <emscripten/emscripten.h>

EM_JS(void, em_alert, (char* s), {
  alert(UTF8ToString(s));
});

extern void js_alert();

EMSCRIPTEN_KEEPALIVE void greet(char *name) {
    char s[100] = "Hello ";
    strcat(s, name);
    js_alert(s);
}

#else

void greet(char *name) {
    char s[100] = "Hello ";
    strcat(s, name);
    printf("%s\n", s);
}

#endif

int main() {
    greet("World");
    return 0;
}
