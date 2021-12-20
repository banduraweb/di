import { Controller, Get } from '@nestjs/common';
import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private spuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.spuService.compute(1, 2), this.diskService.getData()];
  }
}
