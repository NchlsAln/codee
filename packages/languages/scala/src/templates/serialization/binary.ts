export function binaryTemplate(): string {
  return [
    "import com.esotericsoftware.kryo.Kryo",
    "import com.esotericsoftware.kryo.io.{Input, Output}",
    "",
    "val kryo = new Kryo()",
    "val output = new Output(1024)",
    "kryo.writeObject(output, List(1, 2, 3))",
    "output.close()",
    "",
    "val input = new Input(output.getBuffer)",
    "val data = kryo.readObject(input, classOf[java.util.ArrayList[_]])",
    "input.close()",
    "println(data)"
  ].join("\n");
}
