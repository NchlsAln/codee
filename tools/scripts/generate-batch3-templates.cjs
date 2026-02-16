/* eslint-disable @typescript-eslint/no-var-requires, no-console */
const { mkdirSync, writeFileSync } = require("fs");
const { join, dirname } = require("path");

const ROOT = process.cwd();

const renderTemplate = (fnName, lines) => {
  const body = lines.map((line) => `    ${JSON.stringify(line)}`).join(",\n");
  return [
    `export function ${fnName}(): string {`,
    "  return [",
    body,
    "  ].join(\"\\n\");",
    "}",
    ""
  ].join("\n");
};

const TEMPLATE_DATA = {
  zig: {
    "stdlib/core.ts": {
      fn: "stdlibTemplate",
      lines: [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  const arr = [_]i32{ 1, 2, 3 };",
        "  const slice = arr[0..];",
        "  const msg = try std.fmt.allocPrint(std.heap.page_allocator, \"hi {s}\", .{\"zig\"});",
        "  defer std.heap.page_allocator.free(msg);",
        "  var map = std.AutoHashMap([]const u8, i32).init(std.heap.page_allocator);",
        "  defer map.deinit();",
        "  try map.put(\"a\", 1);",
        "  try std.fs.cwd().writeFile(\"data.txt\", \"ok\\n\");",
        "  const data = try std.fs.cwd().readFileAlloc(std.heap.page_allocator, \"data.txt\", 64);",
        "  defer std.heap.page_allocator.free(data);",
        "  const root = std.math.sqrt(81.0);",
        "  _ = slice; _ = msg; _ = root;",
        "}"
      ]
    },
    "systems/core.ts": {
      fn: "systemsTemplate",
      lines: [
        "const std = @import(\"std\");",
        "const c = @cImport({ @cInclude(\"string.h\"); });",
        "pub fn main() !void {",
        "  var gpa = std.heap.GeneralPurposeAllocator(.{}){};",
        "  defer _ = gpa.deinit();",
        "  const allocator = gpa.allocator();",
        "  const buf = try allocator.alloc(u8, 16);",
        "  defer allocator.free(buf);",
        "  const len = c.strlen(\"hi\");",
        "  const home = std.os.getenv(\"HOME\") orelse \"\";",
        "  _ = len; _ = home;",
        "}"
      ]
    },
    "web/core.ts": {
      fn: "webTemplate",
      lines: [
        "const std = @import(\"std\");",
        "fn logRequest(req: *std.http.Server.Request) void {",
        "  std.debug.print(\"{s}\\n\", .{req.head.target});",
        "}",
        "pub fn main() !void {",
        "  var server = std.http.Server.init(std.heap.page_allocator, .{});",
        "  defer server.deinit();",
        "  try server.listen(.{ .port = 8080 });",
        "  while (true) {",
        "    var res = try server.accept(.{});",
        "    defer res.deinit();",
        "    logRequest(&res.request);",
        "    if (std.mem.eql(u8, res.request.head.target, \"/health\")) {",
        "      try res.respond(\"ok\", .{});",
        "    } else {",
        "      try res.respond(\"not found\", .{ .status = .not_found });",
        "    }",
        "  }",
        "}"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "const sqlite = @import(\"sqlite\");",
        "const User = struct { id: i32, name: []const u8 };",
        "pub fn main() !void {",
        "  var db = try sqlite.open(\"app.db\");",
        "  defer db.close();",
        "  try db.exec(\"create table if not exists users (id integer, name text)\");",
        "  try db.exec(\"insert into users values (1, 'Ada')\");",
        "  const rows = try db.query(\"select id, name from users\");",
        "  _ = rows; _ = User{ .id = 1, .name = \"Ada\" };",
        "}"
      ]
    },
    "concurrency/core.ts": {
      fn: "concurrencyTemplate",
      lines: [
        "const std = @import(\"std\");",
        "fn work() void { std.time.sleep(10 * std.time.ns_per_ms); }",
        "pub fn main() !void {",
        "  var thread = try std.Thread.spawn(.{}, work, .{});",
        "  thread.join();",
        "  var chan = std.Channel(i32).init(std.heap.page_allocator);",
        "  defer chan.deinit();",
        "  try chan.send(1);",
        "  _ = try chan.recv();",
        "  var value = std.atomic.Value(i32).init(0);",
        "  _ = value.compareExchangeStrong(0, 1, .seq_cst, .seq_cst);",
        "}"
      ]
    },
    "testing/core.ts": {
      fn: "testingTemplate",
      lines: [
        "const std = @import(\"std\");",
        "test \"add\" {",
        "  try std.testing.expectEqual(@as(i32, 3), 1 + 2);",
        "}",
        "pub fn main() void {",
        "  var timer = std.time.Timer.start() catch return;",
        "  var total: usize = 0;",
        "  var i: usize = 0;",
        "  while (i < 1000) : (i += 1) total += i;",
        "  _ = timer.read();",
        "  _ = total;",
        "}"
      ]
    },
    "cli/core.ts": {
      fn: "cliTemplate",
      lines: [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  var args = std.process.args();",
        "  _ = args.next();",
        "  const input = args.next() orelse \"default\";",
        "  const cfg = std.os.getenv(\"APP_ENV\") orelse \"dev\";",
        "  std.log.info(\"{s} {s}\", .{ input, cfg });",
        "}"
      ]
    },
    "http/core.ts": {
      fn: "httpTemplate",
      lines: [
        "const std = @import(\"std\");",
        "pub fn main() !void {",
        "  var client = std.http.Client{ .allocator = std.heap.page_allocator };",
        "  defer client.deinit();",
        "  var req = try client.open(.GET, .{ .host = \"example.com\", .path = \"/\" }, .{});",
        "  defer req.deinit();",
        "  try req.send(.{});",
        "  _ = try req.wait();",
        "}"
      ]
    },
    "serialization/core.ts": {
      fn: "serializationTemplate",
      lines: [
        "const std = @import(\"std\");",
        "const msgpack = @import(\"msgpack\");",
        "pub fn main() !void {",
        "  const payload = std.json.stringifyAlloc(std.heap.page_allocator, .{ .ok = true }, .{}) catch return;",
        "  defer std.heap.page_allocator.free(payload);",
        "  var buf: [8]u8 = undefined;",
        "  std.mem.writeInt(u64, &buf, 42, .little);",
        "  _ = msgpack;",
        "}"
      ]
    },
    "ffi/core.ts": {
      fn: "ffiTemplate",
      lines: [
        "const std = @import(\"std\");",
        "const c = @cImport({ @cInclude(\"math.h\"); });",
        "pub fn main() !void {",
        "  const v = c.sqrt(9.0);",
        "  var lib = try std.DynamicLibrary.open(\"libm.so\");",
        "  defer lib.close();",
        "  _ = v;",
        "}"
      ]
    }
  },
  nim: {
    "stdlib/core.ts": {
      fn: "stdlibTemplate",
      lines: [
        "import std/[strutils, tables, math, os]",
        "let arr = [1, 2, 3]",
        "let upper = \"nim\".toUpperAscii()",
        "var m = initTable[string, int]()",
        "m[\"a\"] = 1",
        "writeFile(\"data.txt\", \"ok\\n\")",
        "let data = readFile(\"data.txt\")",
        "let root = sqrt(81.0)",
        "discard arr; discard upper; discard data; discard root"
      ]
    },
    "systems/core.ts": {
      fn: "systemsTemplate",
      lines: [
        "import std/os",
        "proc strlen(cstr: cstring): cint {.importc.}",
        "let p = cast[ptr int](allocShared0(sizeof(int)))",
        "p[] = 42",
        "deallocShared(p)",
        "let home = getEnv(\"HOME\", \"\")",
        "discard strlen(\"hi\")",
        "discard home"
      ]
    },
    "web/core.ts": {
      fn: "webTemplate",
      lines: [
        "import jester",
        "routes:",
        "  get \"/health\":",
        "    resp \"ok\"",
        "  get \"/users\":",
        "    resp \"[]\""
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "import db_sqlite",
        "let db = open(\"app.db\", \"\", \"\", \"\")",
        "db.exec(sql(\"create table if not exists users (id integer, name text)\"))",
        "db.exec(sql(\"insert into users values (1, 'Ada')\"))",
        "for row in db.fastRows(sql(\"select id, name from users\")):",
        "  discard row",
        "db.close()"
      ]
    },
    "concurrency/core.ts": {
      fn: "concurrencyTemplate",
      lines: [
        "import std/[asyncdispatch, threadpool, atomics]",
        "proc run() {.async.} =",
        "  await sleepAsync(50)",
        "discard waitFor run()",
        "proc work() = discard",
        "spawn work()",
        "var ch: Channel[int]",
        "ch.open()",
        "ch.send(1)",
        "discard ch.recv()",
        "var atom = initAtomic(0)",
        "discard atom.compareExchange(0, 1)"
      ]
    },
    "testing/core.ts": {
      fn: "testingTemplate",
      lines: [
        "import std/[unittest, random, times]",
        "test \"add\":",
        "  check 1 + 2 == 3",
        "randomize()",
        "for i in 0..100:",
        "  let v = rand(100)",
        "  doAssert v >= 0",
        "let start = cpuTime()",
        "discard start"
      ]
    },
    "cli/core.ts": {
      fn: "cliTemplate",
      lines: [
        "import std/[parseopt, json, logging]",
        "var p = initOptParser(commandLineParams())",
        "for kind, key, val in p.getopt():",
        "  if kind == cmdArgument: discard key",
        "let cfg = parseJson(readFile(\"config.json\"))",
        "info \"loaded config\"",
        "discard cfg"
      ]
    },
    "http/core.ts": {
      fn: "httpTemplate",
      lines: [
        "import std/[httpclient, asynchttpserver, asyncdispatch]",
        "let client = newHttpClient()",
        "discard client.getContent(\"https://example.com\")",
        "var server = newAsyncHttpServer()",
        "proc cb(req: Request) {.async.} = await req.respond(Http200, \"ok\")",
        "asyncCheck server.serve(Port(8080), cb)"
      ]
    },
    "serialization/core.ts": {
      fn: "serializationTemplate",
      lines: [
        "import std/[json, streams]",
        "import msgpack",
        "let payload = %* {\"ok\": true}",
        "discard $payload",
        "var s = newStringStream(\"\")",
        "s.writeInt32(42)",
        "discard msgpack"
      ]
    },
    "ffi/core.ts": {
      fn: "ffiTemplate",
      lines: [
        "proc c_abs(x: cint): cint {.importc: \"abs\", header: \"stdlib.h\".}",
        "let v = c_abs(-3)",
        "const lib = loadLib(\"libm.so\")",
        "discard v; discard lib"
      ]
    }
  },
  crystal: {
    "stdlib/core.ts": {
      fn: "stdlibTemplate",
      lines: [
        "arr = [1, 2, 3]",
        "upper = \"crystal\".upcase",
        "map = {\"a\" => 1}",
        "File.write(\"data.txt\", \"ok\\n\")",
        "data = File.read(\"data.txt\")",
        "root = Math.sqrt(81)",
        "arr; upper; map; data; root"
      ]
    },
    "systems/core.ts": {
      fn: "systemsTemplate",
      lines: [
        "@[Link(\"c\")]",
        "lib LibC",
        "  fun strlen(s : UInt8*) : Int32",
        "end",
        "ptr = Pointer(UInt8).malloc(16)",
        "ptr[0] = 65",
        "len = LibC.strlen(ptr)",
        "home = ENV[\"HOME\"]? || \"\"",
        "ptr.free",
        "len; home"
      ]
    },
    "web/core.ts": {
      fn: "webTemplate",
      lines: [
        "require \"http/server\"",
        "class LogHandler < HTTP::Handler",
        "  def call(ctx)",
        "    puts ctx.request.path",
        "    call_next(ctx)",
        "  end",
        "end",
        "server = HTTP::Server.new([LogHandler.new]) do |ctx|",
        "  case ctx.request.path",
        "  when \"/health\" then ctx.response.print(\"ok\")",
        "  else ctx.response.status_code = 404",
        "  end",
        "end",
        "server.bind_tcp 8080"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "require \"db\"",
        "require \"sqlite3\"",
        "DB.open(\"sqlite3://./app.db\") do |db|",
        "  db.exec \"create table if not exists users (id integer, name text)\"",
        "  db.exec \"insert into users values (1, 'Ada')\"",
        "  db.query_each \"select id, name from users\" do |rs|",
        "    rs.read(Int32); rs.read(String)",
        "  end",
        "end"
      ]
    },
    "concurrency/core.ts": {
      fn: "concurrencyTemplate",
      lines: [
        "ch = Channel(Int32).new",
        "spawn do",
        "  ch.send(1)",
        "end",
        "value = ch.receive",
        "thread = Thread.new { value }",
        "atom = Atomic(Int32).new(0)",
        "atom.compare_and_set(0, 1)",
        "value; thread.join"
      ]
    },
    "testing/core.ts": {
      fn: "testingTemplate",
      lines: [
        "require \"spec\"",
        "describe \"math\" do",
        "  it \"adds\" do",
        "    (1 + 2).should eq(3)",
        "  end",
        "end",
        "require \"benchmark\"",
        "Benchmark.ips do |x|",
        "  x.report(\"sum\") { (1..1000).sum }",
        "end"
      ]
    },
    "cli/core.ts": {
      fn: "cliTemplate",
      lines: [
        "require \"option_parser\"",
        "require \"yaml\"",
        "require \"log\"",
        "OptionParser.parse do |p|",
        "  p.on(\"-n NAME\", \"name\") { |v| Log.info { v } }",
        "end",
        "cfg = YAML.parse(File.read(\"config.yml\"))",
        "Log.info { cfg }"
      ]
    },
    "http/core.ts": {
      fn: "httpTemplate",
      lines: [
        "require \"http/client\"",
        "res = HTTP::Client.get(\"https://example.com\")",
        "require \"http/server\"",
        "server = HTTP::Server.new do |ctx|",
        "  ctx.response.content_type = \"application/json\"",
        "  ctx.response.print({ok: true}.to_json)",
        "end",
        "server.bind_tcp 8080"
      ]
    },
    "serialization/core.ts": {
      fn: "serializationTemplate",
      lines: [
        "require \"json\"",
        "require \"msgpack\"",
        "payload = {ok: true}.to_json",
        "io = IO::Memory.new",
        "io.write_bytes(42_i32, IO::ByteFormat::LittleEndian)",
        "packed = payload.to_msgpack",
        "payload; packed"
      ]
    },
    "ffi/core.ts": {
      fn: "ffiTemplate",
      lines: [
        "@[Link(\"c\")]",
        "lib LibC",
        "  fun puts(s : UInt8*) : Int32",
        "end",
        "LibC.puts(\"hi\")",
        "@[Link(\"m\")]",
        "lib LibM",
        "  fun sqrt(x : Float64) : Float64",
        "end",
        "LibM.sqrt(9.0)"
      ]
    }
  },
  ocaml: {
    "stdlib/core.ts": {
      fn: "stdlibTemplate",
      lines: [
        "let arr = [|1; 2; 3|]",
        "let upper = String.uppercase_ascii \"ocaml\"",
        "module SMap = Map.Make(String)",
        "let map = SMap.add \"a\" 1 SMap.empty",
        "let () = let oc = open_out \"data.txt\" in output_string oc \"ok\\n\"; close_out oc",
        "let data = let ic = open_in \"data.txt\" in let s = input_line ic in close_in ic; s",
        "let root = sqrt 81.0",
        "ignore arr; ignore upper; ignore map; ignore data; ignore root"
      ]
    },
    "systems/core.ts": {
      fn: "systemsTemplate",
      lines: [
        "open Unix",
        "let stats = Gc.stat ()",
        "let home = try getenv \"HOME\" with Not_found -> \"\"",
        "let () = ignore (stats, home)",
        "open Ctypes",
        "open Foreign",
        "let strlen = foreign \"strlen\" (string @-> returning size_t)",
        "let _ = strlen \"hi\""
      ]
    },
    "web/core.ts": {
      fn: "webTemplate",
      lines: [
        "open Dream",
        "let () =",
        "  Dream.run",
        "  @@ Dream.logger",
        "  @@ Dream.router [",
        "       Dream.get \"/health\" (fun _ -> Dream.respond \"ok\");",
        "     ]"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "open Caqti_lwt",
        "let uri = Uri.of_string \"sqlite3://app.db\"",
        "let () = ignore uri",
        "let query = Caqti_request.collect Caqti_type.unit Caqti_type.(tup2 int string) \"select id, name from users\"",
        "let _ = query"
      ]
    },
    "concurrency/core.ts": {
      fn: "concurrencyTemplate",
      lines: [
        "open Lwt.Infix",
        "let async_task = Lwt_unix.sleep 0.1 >|= fun () -> ()",
        "let thread = Thread.create (fun () -> ()) ()",
        "let ch = Lwt_stream.create ()",
        "ignore (async_task, thread, ch)"
      ]
    },
    "testing/core.ts": {
      fn: "testingTemplate",
      lines: [
        "open Alcotest",
        "let () = check int \"sum\" 3 (1 + 2)",
        "open QCheck",
        "let prop = Test.make ~count:100 int (fun n -> n = n)",
        "ignore prop"
      ]
    },
    "cli/core.ts": {
      fn: "cliTemplate",
      lines: [
        "open Arg",
        "let name = ref \"\"",
        "let specs = [\"-n\", Set_string name, \"name\"]",
        "let () = parse specs (fun _ -> ()) \"demo\"",
        "open Yojson.Safe",
        "let cfg = from_string \"{\\\"ok\\\":true}\"",
        "ignore cfg"
      ]
    },
    "http/core.ts": {
      fn: "httpTemplate",
      lines: [
        "open Cohttp_lwt_unix",
        "let () = ignore (Client.get (Uri.of_string \"https://example.com\"))",
        "let server = Server.make ~callback:(fun _ _ -> Server.respond_string ~status:`OK ~body:\"ok\" ()) ()",
        "ignore server"
      ]
    },
    "serialization/core.ts": {
      fn: "serializationTemplate",
      lines: [
        "open Yojson.Safe",
        "let json = `Assoc [(\"ok\", `Bool true)]",
        "let data = to_string json",
        "let binary = Marshal.to_string json []",
        "let _ = (data, binary)"
      ]
    },
    "ffi/core.ts": {
      fn: "ffiTemplate",
      lines: [
        "open Ctypes",
        "open Foreign",
        "let abs_int = foreign \"abs\" (int @-> returning int)",
        "let _ = abs_int (-3)"
      ]
    }
  },
  haskell: {
    "stdlib/core.ts": {
      fn: "stdlibTemplate",
      lines: [
        "import qualified Data.Text as T",
        "import qualified Data.Map.Strict as Map",
        "arr = [1,2,3]",
        "upper = T.toUpper (T.pack \"haskell\")",
        "mp = Map.fromList [(\"a\", 1)]",
        "main = do",
        "  writeFile \"data.txt\" \"ok\n\"",
        "  _ <- readFile \"data.txt\"",
        "  print (sqrt 81 :: Double)",
        "  print (length arr + T.length upper + Map.size mp)"
      ]
    },
    "systems/core.ts": {
      fn: "systemsTemplate",
      lines: [
        "import GHC.Stats",
        "import System.Environment (lookupEnv)",
        "foreign import ccall \"abs\" c_abs :: Int -> Int",
        "main = do",
        "  _ <- getRTSStatsEnabled",
        "  _ <- lookupEnv \"HOME\"",
        "  print (c_abs (-3))"
      ]
    },
    "web/core.ts": {
      fn: "webTemplate",
      lines: [
        "import Network.Wai",
        "import Network.Wai.Handler.Warp",
        "import Network.HTTP.Types",
        "app req respond = case pathInfo req of",
        "  [\"health\"] -> respond $ responseLBS status200 [] \"ok\"",
        "  _ -> respond $ responseLBS status404 [] \"not found\"",
        "main = run 8080 app"
      ]
    },
    "database/core.ts": {
      fn: "databaseTemplate",
      lines: [
        "{-# LANGUAGE GADTs #-}",
        "import Database.Persist",
        "import Database.Persist.Sqlite",
        "main = runSqlite \"app.db\" $ do",
        "  rawExecute \"create table if not exists users (id int, name text)\" []",
        "  rawExecute \"insert into users values (1, 'Ada')\" []"
      ]
    },
    "concurrency/core.ts": {
      fn: "concurrencyTemplate",
      lines: [
        "import Control.Concurrent",
        "import Control.Concurrent.Async",
        "import Control.Concurrent.STM",
        "main = do",
        "  _ <- async (threadDelay 1000)",
        "  ch <- newChan",
        "  writeChan ch (1 :: Int)",
        "  _ <- readChan ch",
        "  v <- newTVarIO (0 :: Int)",
        "  atomically $ writeTVar v 1"
      ]
    },
    "testing/core.ts": {
      fn: "testingTemplate",
      lines: [
        "import Test.Hspec",
        "import Test.QuickCheck",
        "import Criterion.Main",
        "main = do",
        "  hspec $ it \"adds\" $ (1 + 2) `shouldBe` (3 :: Int)",
        "  quickCheck (\n -> n == (n :: Int))",
        "  defaultMain [bench \"sum\" $ nf sum ([1..1000] :: [Int])]"
      ]
    },
    "cli/core.ts": {
      fn: "cliTemplate",
      lines: [
        "import Options.Applicative",
        "import Data.Aeson",
        "import qualified Data.ByteString.Lazy as BL",
        "main = do",
        "  _ <- execParser (info (pure ()) fullDesc)",
        "  _ <- eitherDecode <$> BL.readFile \"config.json\"",
        "  pure ()"
      ]
    },
    "http/core.ts": {
      fn: "httpTemplate",
      lines: [
        "import Network.HTTP.Client",
        "import Network.HTTP.Client.TLS",
        "main = do",
        "  manager <- newManager tlsManagerSettings",
        "  _ <- httpLbs \"https://example.com\" manager",
        "  pure ()"
      ]
    },
    "serialization/core.ts": {
      fn: "serializationTemplate",
      lines: [
        "import Data.Aeson",
        "import Data.Binary",
        "import Data.MessagePack",
        "main = do",
        "  let json = encode (object [\"ok\" .= True])",
        "  let bin = encode (42 :: Int)",
        "  let packed = pack (\"hi\" :: String)",
        "  print (json, bin, packed)"
      ]
    },
    "ffi/core.ts": {
      fn: "ffiTemplate",
      lines: [
        "{-# LANGUAGE ForeignFunctionInterface #-}",
        "foreign import ccall \"math.h sqrt\" c_sqrt :: Double -> Double",
        "main = print (c_sqrt 9)"
      ]
    }
  }
};

const writeTemplates = (language, templates) => {
  const baseDir = join(ROOT, "packages", "languages", language, "src", "templates");
  Object.entries(templates).forEach(([relPath, spec]) => {
    const filePath = join(baseDir, relPath);
    mkdirSync(dirname(filePath), { recursive: true });
    writeFileSync(filePath, renderTemplate(spec.fn, spec.lines));
  });
};

Object.entries(TEMPLATE_DATA).forEach(([language, templates]) => {
  writeTemplates(language, templates);
});

console.log("Generated Batch 3 template files.");
