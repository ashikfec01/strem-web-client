// import { PeerImpl, SignalingImpl } from '@webp2p/adapters';
// import { Peer, Signaling, Socket } from '@webp2p/ports';

import { Peer, Signaling } from '@webp2p/ports';
import { PeerImpl, SignalingImpl } from './adapters';
import { Socket } from 'socket.io-client';

export class AppProviders {
  static forPorts({ signaling, iceServers }: { signaling: string; iceServers: RTCIceServer[] }) {
    return [
      {
        provide: Signaling,
        useFactory: () => {
          return new SignalingImpl(signaling);
        },
      },
      {
        provide: Peer,
        useFactory: (signaling: Signaling<Socket>) => {
          return new PeerImpl({ iceServers: iceServers }, signaling);
        },
        deps: [Signaling],
      },
    ];
  }
}
