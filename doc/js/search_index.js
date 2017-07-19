var search_data = {"index":{"searchIndex":["chess","badnotationerror","board","cgame","game","gnuchess","illegalmoveerror","invalidfenformaterror","invalidpgnformaterror","pgn","utf8notation","<<()","[]()","[]()","active_color()","active_player()","board()","check?()","checkmate?()","coord_moves()","current()","draw()","each()","fifty_rule_move?()","fullmove_number()","gnuchess_move()","gnuchess_move!()","halfmove_clock()","inactive_player()","insufficient_material?()","load()","load_fen()","load_pgn()","move()","move()","move2()","move3()","move=()","moves()","moves=()","new()","new()","over?()","pgn()","placement()","resign()","result()","rollback!()","set_fen!()","size()","stalemate?()","status()","threefold_repetition?()","to_fen()","to_s()","to_s()","to_s()","to_utf8()","write()","readme"],"longSearchIndex":["chess","chess::badnotationerror","chess::board","chess::cgame","chess::game","chess::gnuchess","chess::illegalmoveerror","chess::invalidfenformaterror","chess::invalidpgnformaterror","chess::pgn","chess::utf8notation","chess::game#<<()","chess::board#[]()","chess::cgame#[]()","chess::board#active_color()","chess::game#active_player()","chess::cgame#board()","chess::board#check?()","chess::board#checkmate?()","chess::cgame#coord_moves()","chess::cgame#current()","chess::cgame#draw()","chess::cgame#each()","chess::board#fifty_rule_move?()","chess::board#fullmove_number()","chess::gnuchess#gnuchess_move()","chess::gnuchess#gnuchess_move!()","chess::board#halfmove_clock()","chess::game#inactive_player()","chess::board#insufficient_material?()","chess::pgn#load()","chess::game::load_fen()","chess::game::load_pgn()","chess::cgame#move()","chess::game#move()","chess::cgame#move2()","chess::cgame#move3()","chess::game#move=()","chess::cgame#moves()","chess::game#moves=()","chess::game::new()","chess::pgn::new()","chess::game#over?()","chess::game#pgn()","chess::board#placement()","chess::cgame#resign()","chess::cgame#result()","chess::cgame#rollback!()","chess::cgame#set_fen!()","chess::cgame#size()","chess::board#stalemate?()","chess::game#status()","chess::cgame#threefold_repetition?()","chess::board#to_fen()","chess::board#to_s()","chess::cgame#to_s()","chess::pgn#to_s()","chess::utf8notation#to_utf8()","chess::pgn#write()",""],"info":[["Chess","","Chess.html","","<p>The Chess library module.\n"],["Chess::BadNotationError","","Chess/BadNotationError.html","","<p>This exception will be raised when an invalid short algebraic chess\nnotation string is passed to the …\n"],["Chess::Board","","Chess/Board.html","","<p>This class rappresents a chess board. The rappresentation of the board use\n<em>bitboards</em> where each bit represents …\n"],["Chess::CGame","","Chess/CGame.html","","<p>This class rappresents a collection of boards of a single chess game.\n"],["Chess::Game","","Chess/Game.html","","<p>This class rappresents a chess game.\n"],["Chess::Gnuchess","","Chess/Gnuchess.html","","<p>Use Gnuchess to I.A. <em>(Only a draft)</em> To use this module, extend a\ngame object with Chess::Gnuchess. Gnuchess …\n"],["Chess::IllegalMoveError","","Chess/IllegalMoveError.html","","<p>This exception will be raised when making an illegal move.\n"],["Chess::InvalidFenFormatError","","Chess/InvalidFenFormatError.html","","<p>This exception will be raised when an invalid FEN string is used.\n"],["Chess::InvalidPgnFormatError","","Chess/InvalidPgnFormatError.html","","<p>This exception will be raised when a malformed PGN file is loaded.\n"],["Chess::Pgn","","Chess/Pgn.html","","<p>Rappresents a game in PGN (Portable Game Notation) format.\n"],["Chess::UTF8Notation","","Chess/UTF8Notation.html","","<p>With this module is possible call the method <code>to_utf8</code> on a\nstring. This method convert the chess piece …\n"],["<<","Chess::Game","Chess/Game.html#method-i-3C-3C","(m)",""],["[]","Chess::Board","Chess/Board.html#method-i-5B-5D","(p1)","<p>Returns the piece on the <code>square</code> of the chessboard. If there is\nno piece or the square is not valid return …\n"],["[]","Chess::CGame","Chess/CGame.html#method-i-5B-5D","(p1)","<p>Returns the <code>n</code>-th Board of the Game or <code>nil</code> if the\n<code>n</code>-th Board does not exist.\n"],["active_color","Chess::Board","Chess/Board.html#method-i-active_color","()","<p>Returns the active color: <code>false</code> means white turn,\n<code>true</code> means black turn.\n"],["active_player","Chess::Game","Chess/Game.html#method-i-active_player","()","<p>Returns <code>:white</code> if the active player is the white player,\n<code>:black</code> otherwise.\n"],["board","Chess::CGame","Chess/CGame.html#method-i-board","()",""],["check?","Chess::Board","Chess/Board.html#method-i-check-3F","()","<p>Returns <code>true</code> if the king of the color that has the turn is in\ncheck, <code>false</code> otherwise.\n"],["checkmate?","Chess::Board","Chess/Board.html#method-i-checkmate-3F","()","<p>Returns <code>true</code> if the king of the color that has the turn is in\ncheckmate, <code>false</code> otherwise.\n"],["coord_moves","Chess::CGame","Chess/CGame.html#method-i-coord_moves","()","<p>Returns the array with all moves done in coordinate chess notation <em>(es:\nb1c3)</em>.\n"],["current","Chess::CGame","Chess/CGame.html#method-i-current","()","<p>Returns the current Board of the Game (the current chess position of the\ngame).\n"],["draw","Chess::CGame","Chess/CGame.html#method-i-draw","()","<p>The game result is set to draw.\n"],["each","Chess::CGame","Chess/CGame.html#method-i-each","()","<p>Calls <code>block</code> once for each <code>board</code> in self, passing\nthat <code>board</code>, <code>move</code>, <code>coord_move</code> and\n<code>index</code> as parameters. …\n"],["fifty_rule_move?","Chess::Board","Chess/Board.html#method-i-fifty_rule_move-3F","()","<p>Returns <code>true</code> if a player can claim draw by the fifty-move\nrule, <code>false</code> otherwise.\n"],["fullmove_number","Chess::Board","Chess/Board.html#method-i-fullmove_number","()","<p>Returns the fullmove number: the number of the full move. It starts at 1,\nand is incremented after black&#39;s …\n"],["gnuchess_move","Chess::Gnuchess","Chess/Gnuchess.html#method-i-gnuchess_move","()","<p>Return the next move calculated by Gnuchess. Gnuchess must be installed!\n"],["gnuchess_move!","Chess::Gnuchess","Chess/Gnuchess.html#method-i-gnuchess_move-21","()","<p>Make a move using Gnuchess engine. This add a new Board in the Game. Return\nthe next move calculated …\n"],["halfmove_clock","Chess::Board","Chess/Board.html#method-i-halfmove_clock","()","<p>Returns the halfmove clock that is the number of halfmoves since the last\npawn advance or capture. This …\n"],["inactive_player","Chess::Game","Chess/Game.html#method-i-inactive_player","()","<p>Returns <code>:white</code> if the inactive player is the white player,\n<code>:black</code> otherwise.\n"],["insufficient_material?","Chess::Board","Chess/Board.html#method-i-insufficient_material-3F","()","<p>Returns <code>true</code> if the board has insufficient material to\ncheckmate, <code>false</code> otherwise.\n"],["load","Chess::Pgn","Chess/Pgn.html#method-i-load","(filename)","<p>Load a PGN from file.\n"],["load_fen","Chess::Game","Chess/Game.html#method-c-load_fen","(fen)","<p>Creates a new game from a FEN string.\n<p>May be raise an InvalidFenFormatError.\n<p><strong>Warning</strong>: this game do not …\n"],["load_pgn","Chess::Game","Chess/Game.html#method-c-load_pgn","(file)","<p>Creates a new game from a file in PGN format.\n<p>May be raise an InvalidPgnFormatError or IllegalMoveError …\n"],["move","Chess::CGame","Chess/CGame.html#method-i-move","(p1, p2, p3, p4)","<p>Make a move. This add a new Board in the Game.\n<p>Parameters are:\n<p>piece &mdash; the character of the moving piece …\n"],["move","Chess::Game","Chess/Game.html#method-i-move","(m)","<p>Make a move. This add a new Board in the Storyboard.\n<p>Parameters are:\n<p>m &mdash; represents the short algebraic chess …\n"],["move2","Chess::CGame","Chess/CGame.html#method-i-move2","(p1, p2, p3)","<p>Make a move. This add a new Board in the Game.\n<p>Parameters are:\n<p>from &mdash; the 2 character string representing …\n"],["move3","Chess::CGame","Chess/CGame.html#method-i-move3","(p1, p2, p3)","<p>Make a move. This add a new Board in the Game.\n<p>Each square on the chessboard is represented by an integer …\n"],["move=","Chess::Game","Chess/Game.html#method-i-move-3D","(m)",""],["moves","Chess::CGame","Chess/CGame.html#method-i-moves","()","<p>Returns the array with all moves done <em>(es: Nc3)</em>.\n"],["moves=","Chess::Game","Chess/Game.html#method-i-moves-3D","(moves)","<p>Make the array of moves.\n"],["new","Chess::Game","Chess/Game.html#method-c-new","(moves = [])","<p>Create a new game. If an array of moves is provided, the moves will be\nperformed.\n<p>May be raise an IllegalMoveError …\n"],["new","Chess::Pgn","Chess/Pgn.html#method-c-new","(filename = nil)","<p>Creates a new PGN. If param <code>filename</code>, load it from file.\n"],["over?","Chess::Game","Chess/Game.html#method-i-over-3F","()","<p>Returns <code>true</code> if the game is over\n"],["pgn","Chess::Game","Chess/Game.html#method-i-pgn","()","<p>Returns the PGN rappresenting the game.\n"],["placement","Chess::Board","Chess/Board.html#method-i-placement","()","<p>Calls <code>block</code> once for each square in the board, passing the\n<code>piece</code> in the square and the <code>index</code> as parameters.\n…\n"],["resign","Chess::CGame","Chess/CGame.html#method-i-resign","(p1)","<p>The game result is set to &#39;1-0&#39; if <code>color</code> is “black”,\notherwise is set to &#39;0-1&#39; …\n"],["result","Chess::CGame","Chess/CGame.html#method-i-result","()","<p>Returns the result of the game:\n<p>* &mdash; game in progress;\n<p>1-0 &mdash; white won;\n"],["rollback!","Chess::CGame","Chess/CGame.html#method-i-rollback-21","()","<p>Rollback last move.\n"],["set_fen!","Chess::CGame","Chess/CGame.html#method-i-set_fen-21","(p1)","<p>Set the game position with a FEN string.\n<p>Parameters are:\n<p>fen &mdash; the FEN (Forsyth–Edwards Notation) string …\n"],["size","Chess::CGame","Chess/CGame.html#method-i-size","()","<p>Returns the number of moves done.\n"],["stalemate?","Chess::Board","Chess/Board.html#method-i-stalemate-3F","()","<p>Returns <code>true</code> if the pieces of the color that has the turn are\nin stalemate, <code>false</code> otherwise.\n"],["status","Chess::Game","Chess/Game.html#method-i-status","()","<p>Returns the status of the game.\n<p>Possible states are:\n<p><p>in_progress &mdash; the game is in progress.\n"],["threefold_repetition?","Chess::CGame","Chess/CGame.html#method-i-threefold_repetition-3F","()","<p>Returns <code>true</code> if a player can claim draw by the threefold\nrepetition rule, <code>false</code> otherwise.\n"],["to_fen","Chess::Board","Chess/Board.html#method-i-to_fen","()","<p>Return the FEN string of the board.\n"],["to_s","Chess::Board","Chess/Board.html#method-i-to_s","()","<p>Board to string.\n"],["to_s","Chess::CGame","Chess/CGame.html#method-i-to_s","()","<p>Current board to string.\n"],["to_s","Chess::Pgn","Chess/Pgn.html#method-i-to_s","()","<p>PGN to string.\n"],["to_utf8","Chess::UTF8Notation","Chess/UTF8Notation.html#method-i-to_utf8","()","<p>Replace the piece identifier characters with UTF8 chess characters\n"],["write","Chess::Pgn","Chess/Pgn.html#method-i-write","(filename)","<p>Write PGN to file.\n"],["README","","README_rdoc.html","","<p>Chess\n<p>A fast Ruby library to play chess with Ruby. This library is quite fast\nbecause rappresent the game …\n"]]}}