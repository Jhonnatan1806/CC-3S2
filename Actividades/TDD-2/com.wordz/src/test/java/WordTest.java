import org.junit.jupiter.api.Test;

public class WordTest {
    @Test
    public void oneIncorrectLetter() {
        var word = new Word("A");
        word.guess("Z");
    }
}
