export function channelsTemplate(): string {
  return "import java.util.concurrent.BlockingQueue;\nimport java.util.concurrent.LinkedBlockingQueue;\n\npublic class ChannelSample {\n  public static void main(String[] args) throws Exception {\n    BlockingQueue<Integer> queue = new LinkedBlockingQueue<>();\n    queue.put(1);\n    queue.put(2);\n    System.out.println(queue.take());\n  }\n}\n";
}
