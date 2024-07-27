public class RightAngleTriangle {
     public static void printTriangle(Integer rows) {
        // Loop through each row
        for (Integer i = 1; i <= rows; i++) {
            String row = '';
            // Print stars for the current row
            for (Integer j = 1; j <= i; j++) {
                row += '* ';
            }
            // Print the row
            System.debug(row);
        }
    }

}