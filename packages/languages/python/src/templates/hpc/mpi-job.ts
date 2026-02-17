export function mpiJobTemplate(): string {
  return [
    "from mpi4py import MPI",
    "",
    "comm = MPI.COMM_WORLD",
    "rank = comm.Get_rank()",
    "size = comm.Get_size()",
    "",
    "data = list(range(size)) if rank == 0 else None",
    "chunk = comm.scatter(data, root=0)",
    "result = chunk * chunk",
    "results = comm.gather(result, root=0)",
    "",
    "if rank == 0:",
    "    print('results', results)",
  ].join("\n");
}
