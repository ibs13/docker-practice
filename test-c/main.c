#include <stdio.h>

int main() {
    long long num;
    int count = 0;
    
    // Taking input from user
    printf("Enter a number: ");
    scanf("%lld", &num);
    
    // Handling negative numbers
    if (num < 0) {
        num = -num;
    }
    
    // Counting digits
    do {
        count++;
        num /= 10;
    } while (num != 0);
    
    // Displaying result
    printf("Number of digits: %d\n", count);
    
    return 0;
}