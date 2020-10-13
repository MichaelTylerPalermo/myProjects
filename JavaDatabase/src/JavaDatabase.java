import java.util.logging.Logger;
import java.sql.*;
import java.sql.SQLException;
import java.util.logging.Level;


class JavaDatabase {
    public static void main(String[] args) {
        JavaDatabase pro = new JavaDatabase();
        pro.createConnection();
    }
    
    void createConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/usersdb", "root", "root");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM STUDENT where firstname like 'Z%'");
            while(rs.next()){
                String name = rs.getString("firstname");
                System.out.println(name);
            }
        } catch (ClassNotFoundException | SQLException e) {
            Logger.getLogger(JavaDatabase.class.getName()).log(Level.SEVERE,null,e);
        }
    }
}